export interface ShopifyImage {
  id: number;
  src: string;
  alt?: string | null;
  width?: number;
  height?: number;
}

export interface ShopifyVariant {
  id: number;
  title: string;
  sku?: string | null;
  price: string;
  compare_at_price?: string | null;
  available: boolean;
  inventory_quantity?: number;
}

export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  description: string;
  body_html?: string;
  vendor?: string;
  product_type?: string;
  tags?: string;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  status?: string;
  published_at?: string | null;
}
