import fs from "fs";

const api = {
  all: () =>
    fs
      .readdirSync("./public/items")
      .filter((file) => /.(png|jpg)/.test(file))
      .map((item) => {
        const [, creator, name, movement] = item.match(/(\[.*?\])(\(.*?\))(\{.*?\})/);

        return {
          image: item,
          creator: creator.replace(/[^\w\s]/g, ""),
          name: name.replace(/[^\w\s]/g, ""),
          movement: movement.replace(/[^\w\s]/g, ""),
        };
      }),
};

export default api;
