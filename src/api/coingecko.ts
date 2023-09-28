import axios from "axios";

export const getCoins = async () => {
  return await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
    params: {
      vs_currency: "usd",
      order_by: "market_cap_desc",
    },
  });
};

interface GetCoinsProps {
  id: string | undefined;
}

export const getCoin = async ({ id }: GetCoinsProps) => {
  if (!id) return;
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {});
};
