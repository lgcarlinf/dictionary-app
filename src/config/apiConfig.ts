export const API_CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "https://api.example.com",
  TIMEOUT: 10000,
  HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
