import { selector } from "recoil";

import { fruit, selectedItems } from "./atoms";

export const theBill = selector({
  key: "theBill",
  get: ({ get }) => {
    const items = get(fruit)
      .filter(({ name }) => get(selectedItems).includes(name))
      .map((fruit) => ({
        ...fruit,
        quantity: 2,
        total: fruit.price * 2,
      }));

    return {
      items,
      total: items.reduce((a, { total }) => a + total, 0),
    };
  },
});
