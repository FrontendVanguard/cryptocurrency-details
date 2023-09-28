export type CoinType = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
};

export interface CoinDetailsType extends CoinType {
  watchlist_portfolio_users: number;
  liquidity_score: number;
  description: { en: string };
  categories: string[];
  image: {
    small: string;
    large: string;
    thumb: string;
  };
}
