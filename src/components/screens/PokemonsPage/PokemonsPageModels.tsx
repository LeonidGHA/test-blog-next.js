export interface IAllPokemons {
  data?: { allArticles: IPokemon[] };
}

export interface IPokemon {
  title: string;
  id: string;
  alt: string;
  publishDate: string;
  pokemon: {
    name: string;
  };
  coverImage: {
    id: string;
    url: string;
  };
}
