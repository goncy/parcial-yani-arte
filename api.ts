import fs from "fs";

export default {
  list: () =>
    Promise.resolve(
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
        })
        .sort(() => 0.5 - Math.random()),
    ),
};
