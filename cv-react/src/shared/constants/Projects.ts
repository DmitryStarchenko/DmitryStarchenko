export type Data = {
  name: string;
  url: string;
};

type Project = {
  dataECommerce: Data;
  dataPutman: Data;
  dataPokemons: Data;
};

export const dataProjects: Project = {
  dataECommerce: {
    name: "eCommerce application shop",
    url: "https://ecommerce-shop-rss2024.netlify.app/main",
  },
  dataPutman: {
    name: "Putman",
    url: "https://putman.vercel.app/",
  },
  dataPokemons: {
    name: "Pokemons React",
    url: "https://pokemon-react-2025.netlify.app/",
  },
};
