import { request } from "../shared/graphApi/graphApi";
import { gql } from "graphql-request";
import Image from "next/image";

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

export async function getStaticProps() {
  const data = await request({
    query: POKEMON_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

interface allPokemons {
  data: { allArticles: pokemon[] };
}
interface pokemon {
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

export default function Home(props: allPokemons) {
  const { data } = props;
  console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Hello git</h1>
      <h2>Branch</h2>
      <ul className={`flex gap-4 flex-row`}>
        {data.allArticles.map((elem) => {
          const { id, title, alt, pokemon, coverImage } = elem;
          return (
            <li key={id} className={`p-8 border-2 border-white rounded-lg`}>
              <Image
                className={`mb-4`}
                priority={true}
                src={coverImage.url}
                alt={`Photo pokemon ${pokemon.name}`}
                width={200}
                height={200}
              />
              <h2 className={`mb-4`}>{pokemon.name}</h2>
              <p className={`mb-4`}>Type: {title}</p>
              <p>Skills: {alt}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
