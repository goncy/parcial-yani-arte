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
  movement: (_movement: string) => api.all().filter(({movement}) => movement === _movement),
  movements: () =>
    api
      .all()
      .reduce(
        (movements, item) =>
          movements.includes(item.movement) ? movements : movements.concat(item.movement),
        [],
      ),
};

export default api;
