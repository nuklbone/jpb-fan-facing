-- ------------------------------------------------------------
-- James Pitts Band Fan-Facing Site - Supabase Schema
-- Run this file in the Supabase SQL editor (auth schema exists by default).
-- ------------------------------------------------------------

-- Extensions
create extension if not exists "pgcrypto";

-- ============================================================
-- Membership & Fan Club
-- ============================================================

create table if not exists public.membership_tiers (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text not null unique,
    price_monthly numeric(10,2),
    price_yearly numeric(10,2),
    benefits jsonb default '[]'::jsonb,
    is_active boolean default true,
    sort_order integer default 0,
    created_at timestamptz not null default now()
);

create table if not exists public.members (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    email text not null,
    tier_id uuid references public.membership_tiers(id) on delete set null,
    status text not null default 'active' check (status in ('active','cancelled','expired')),
    subscription_id text,
    joined_at timestamptz not null default now(),
    expires_at timestamptz,
    updated_at timestamptz not null default now(),
    unique (user_id)
);

create table if not exists public.exclusive_content (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text not null unique,
    content text,
    content_type text not null default 'article', -- article | video | audio | download
    tier_required uuid references public.membership_tiers(id) on delete set null,
    file_url text,
    thumbnail_url text,
    published boolean default false,
    published_at timestamptz,
    created_at timestamptz not null default now()
);

create index if not exists members_user_id_idx on public.members(user_id);
create index if not exists exclusive_content_tier_idx on public.exclusive_content(tier_required);

-- ============================================================
-- Tour Alerts & Requests
-- ============================================================

create table if not exists public.tour_alert_signups (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    city text,
    region text,
    country text,
    created_at timestamptz not null default now()
);

create table if not exists public.city_requests (
    id uuid primary key default gen_random_uuid(),
    name text,
    email text,
    city text,
    venue text,
    message text,
    created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security & Policies
-- ============================================================

alter table public.membership_tiers enable row level security;
alter table public.members enable row level security;
alter table public.exclusive_content enable row level security;
alter table public.tour_alert_signups enable row level security;
alter table public.city_requests enable row level security;

-- Membership tiers readable by everyone (tier data is public)
create policy "tiers_public_read"
  on public.membership_tiers
  for select
  using (true);

-- Members can read/update their own membership; service role handles inserts/updates if needed
create policy "members_read_own"
  on public.members
  for select
  using (auth.uid() = user_id);

create policy "members_update_own"
  on public.members
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "members_insert_self"
  on public.members
  for insert
  with check (auth.uid() = user_id);

-- Exclusive content readable only for active members that meet tier requirement (or public content when tier is null)
create policy "exclusive_content_member_access"
  on public.exclusive_content
  for select
  using (
    exists (
      select 1
      from public.members m
      where m.user_id = auth.uid()
        and m.status = 'active'
        and (
          exclusive_content.tier_required is null
          or m.tier_id = exclusive_content.tier_required
        )
    )
  );

-- Tour alert signups: allow inserts from anon/auth clients; only service role can read/delete
create policy "tour_alert_collect"
  on public.tour_alert_signups
  for insert
  with check (true);

create policy "tour_alert_private"
  on public.tour_alert_signups
  for select using (auth.role() = 'service_role');

-- City requests form: allow anon inserts, keep data private otherwise
create policy "city_request_collect"
  on public.city_requests
  for insert
  with check (true);

create policy "city_request_private"
  on public.city_requests
  for select using (auth.role() = 'service_role');

-- Optional helper to update updated_at
create or replace function public.update_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_members_updated_at
  before update on public.members
  for each row execute procedure public.update_timestamp();
