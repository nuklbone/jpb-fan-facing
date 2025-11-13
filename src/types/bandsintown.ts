export interface BandsintownVenue {
  name: string;
  country: string;
  region: string;
  city: string;
  latitude?: string;
  longitude?: string;
}

export interface BandsintownOffer {
  type: string;
  url: string;
  status: string;
}

export interface BandsintownEvent {
  id: string;
  url: string;
  datetime: string;
  venue: BandsintownVenue;
  lineup: string[];
  offers: BandsintownOffer[];
  description?: string;
  artist_id?: string;
}
