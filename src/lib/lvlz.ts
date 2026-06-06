import { createClient } from "@lvlz/sdk";

const apiKey = process.env.LVLZ_KEY?.trim();

export const lvlz = apiKey
  ? createClient({
      apiKey,
      baseUrl: process.env.LVLZ_BASE_URL,
      fetchOptions: { next: { revalidate: 600 } },
    })
  : null;
