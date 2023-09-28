import { Coin } from "../types";

export const filterDataByName = (
  data: Coin[],
  str: string
): Promise<Coin[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = data.filter((el) =>
        el.name.toLowerCase().includes(str.toLowerCase())
      );
      resolve(filteredData);
    }, 50);
  });
};
