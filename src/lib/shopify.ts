import { env } from "@/lib/env";
import type { ShopifyProduct } from "@/types/shopify";

const BASE_URL = `https://${env.shopifyStoreDomain}`;
const ADMIN_API_VERSION = env.shopifyStorefrontApiVersion;

const adminHeaders = {
  "X-Shopify-Access-Token": env.shopifyAdminToken,
  "Content-Type": "application/json",
} as const;

export async function getProducts(): Promise<ShopifyProduct[]> {
  const response = await fetch(
    `${BASE_URL}/admin/api/${ADMIN_API_VERSION}/products.json`,
    {
      headers: adminHeaders,
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(`Shopify Admin API error: ${response.statusText}`);
  }

  const data = (await response.json()) as { products: ShopifyProduct[] };
  return data.products;
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const products = await getProducts();
  return products.find((product) => product.handle === handle) ?? null;
}

export async function getCollections() {
  const response = await fetch(
    `${BASE_URL}/admin/api/${ADMIN_API_VERSION}/collections.json`,
    {
      headers: adminHeaders,
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(`Shopify Admin API error: ${response.statusText}`);
  }

  const data = (await response.json()) as { collections: unknown[] };
  return data.collections;
}
