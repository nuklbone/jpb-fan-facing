// Schema.org JSON-LD types (inline definitions to avoid dependency)
interface SchemaOffer {
  "@type": "Offer";
  price: string;
  priceCurrency: string;
  availability: string;
  url: string;
  validFrom?: string;
}

interface SchemaMusicEvent {
  "@context": string;
  "@type": "MusicEvent";
  name: string;
  startDate: string;
  endDate?: string;
  eventStatus: string;
  eventAttendanceMode: string;
  location: {
    "@type": string;
    name: string;
    address: {
      "@type": string;
      streetAddress: string;
    };
  };
  performer: {
    "@type": string;
    name: string;
    url?: string;
  };
  description?: string;
  image?: string;
  offers?: SchemaOffer[];
}

interface MusicEventSchemaProps {
  name: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  performer: {
    name: string;
    url?: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
    validFrom?: string;
  }[];
  image?: string;
  description?: string;
}

export function generateMusicEventSchema({
  name,
  startDate,
  endDate,
  location,
  performer,
  offers,
  image,
  description,
}: MusicEventSchemaProps): SchemaMusicEvent {
  const event: SchemaMusicEvent = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name,
    startDate,
    endDate: endDate || startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
      },
    },
    performer: {
      "@type": "MusicGroup",
      name: performer.name,
      ...(performer.url && { url: performer.url }),
    },
    ...(description && { description }),
    ...(image && { image }),
    ...(offers && {
      offers: offers.map(
        (offer): SchemaOffer => ({
          "@type": "Offer",
          price: offer.price,
          priceCurrency: offer.priceCurrency,
          availability: `https://schema.org/${offer.availability}`,
          url: offer.url,
          ...(offer.validFrom && { validFrom: offer.validFrom }),
        })
      ),
    }),
  };

  return event;
}

export function generateMusicEventJsonLd(
  schema: SchemaMusicEvent
): string {
  return JSON.stringify(schema, null, 2);
}

