import { CoinType } from "../types";

export const filterDataByName = (
  data: CoinType[],
  str: string
): Promise<CoinType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = data.filter((el) =>
        el.name.toLowerCase().includes(str.toLowerCase())
      );
      resolve(filteredData);
    }, 50);
  });
};
