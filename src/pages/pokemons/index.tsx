import { gql } from "graphql-request";
import PokemonsPage from "@/components/screens/PokemonsPage/PokemonsPage";
import { request } from "../../shared/graphApi/graphApi";
import { IAllPokemons } from "../../components/screens/PokemonsPage/PokemonsPageModels";

const POKEMON_QUERY = gql`
  {
    allArticles {
      title
      id
      alt
      publishDate
      pokemon {
        name
      }
      coverImage {
        id
        url
      }
    }
  }
`;

const Pokemons = (props: IAllPokemons) => {
  return <PokemonsPage pokemons={props} />;
};

export async function getStaticProps() {
  const data = await request({
    query: POKEMON_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { data },
  };
}

export default Pokemons;
