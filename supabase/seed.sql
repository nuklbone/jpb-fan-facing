-- ------------------------------------------------------------
-- Optional Seed Data for Development
-- Run after schema.sql if you want baseline tiers/content.
-- ------------------------------------------------------------

insert into public.membership_tiers (name, slug, price_monthly, price_yearly, benefits, sort_order)
values
  (
    'True Fan',
    'true-fan',
    0,
    0,
    '["Tour alerts","Monthly stories","Fan wall shoutouts"]',
    0
  ),
  (
    'Backstage Crew',
    'backstage-crew',
    5,
    50,
    '["Early ticket drops","Exclusive live tracks","Merch discounts"]',
    1
  ),
  (
    'Inner Circle VIP',
    'inner-circle-vip',
    20,
    200,
    '["Meet & greet invites","Signed setlist drops","Quarterly livestream hang"]',
    2
  )
  on conflict (slug) do nothing;

insert into public.exclusive_content (title, slug, content, content_type, tier_required, published, published_at)
select
  'Live at HutchFest (Uncut)',
  'live-at-hutchfest-uncut',
  'Full board mix and behind-the-scenes recap from HutchFest.',
  'video',
  mt.id,
  true,
  now()
from public.membership_tiers mt
where mt.slug = 'backstage-crew'
  and not exists (
    select 1 from public.exclusive_content ec where ec.slug = 'live-at-hutchfest-uncut'
  );
