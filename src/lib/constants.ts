/**
 * Shared constants for the James Pitts Band website
 */

export const SITE_CONFIG = {
  name: "James Pitts Band",
  tagline: "High-Energy Soul-Blues Shows",
  description: "Dive into the James Pitts Band's soul-blues party—stream new music, grab tickets, and join the Inner Circle for exclusive drops and presale perks.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://jamespittsband.com",
  email: {
    innerCircle: "innercircle@jamespittsband.com",
    press: "stories@jamespittsband.com",
    support: "innercircle@jamespittsband.com",
  },
  social: {
    spotify: "https://open.spotify.com/artist/6x5AxZMtIgABsr2dlnurk7",
    instagram: "https://instagram.com/jamespittsband",
    tiktok: "https://tiktok.com/@jamespittsband",
    youtube: "https://youtube.com/@jamespittsband",
    facebook: "https://facebook.com/jamespittsband",
    bandsintown: "https://bandsintown.com/jamespittsband",
  },
  hashtag: "#JMPBParty",
  innerCircleHashtag: "#InnerCircleCrew",
} as const;

export const NAV_LINKS = [
  { href: "/music", label: "Music" },
  { href: "/shows", label: "Shows" },
  { href: "/videos", label: "Videos" },
  { href: "/store", label: "Store" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  music: [
    { href: "/music", label: "All Music" },
    { href: "/music#albums", label: "Albums & EPs" },
    { href: "/music#playlists", label: "Fan Playlists" },
  ],
  shows: [
    { href: "/shows", label: "All Shows" },
    { href: "/tickets", label: "Tickets & VIP" },
    { href: "/shows#faq", label: "FAQ" },
  ],
  connect: [
    { href: "/join", label: "Inner Circle" },
    { href: "/news", label: "News & Updates" },
    { href: "/social-hub", label: "Social Hub" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/contact", label: "Accessibility" },
  ],
} as const;

export const MEMBERSHIP_TIERS = {
  free: {
    name: "Free Newsletter",
    price: 0,
    features: [
      "Show announcements",
      "Playlist updates",
      "Merch previews",
    ],
  },
  backstage: {
    name: "Backstage Crew",
    price: 5,
    features: [
      "Everything in Free",
      "Early ticket codes",
      "Exclusive videos",
      "Monthly AMAs",
      "5% merch discount",
    ],
  },
  vip: {
    name: "Inner Circle VIP",
    price: 15,
    features: [
      "Everything in Backstage Crew",
      "Full replay vault",
      "Exclusive stems",
      "Quarterly mystery merch",
      "VIP upgrade lotteries",
      "15% merch discount",
    ],
  },
} as const;

export const SPOTIFY_LINKS = {
  artist: "https://open.spotify.com/artist/6x5AxZMtIgABsr2dlnurk7",
  album2025: "https://open.spotify.com/album/5Y7gF08XhOL4ecixNmYzR5",
  album2019: "https://open.spotify.com/artist/6x5AxZMtIgABsr2dlnurk7",
} as const;

