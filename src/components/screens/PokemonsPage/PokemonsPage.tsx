import Image from "next/image";

import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import MainContentWrapper from "@/helpers/MainContentWrapper/MainContentWrapper";

import { IAllPokemons } from "./PokemonsPageModels";

const metaProps = [{ name: `pokemos`, content: `choose yours pokemon` }];

const PokemonsPage = ({ pokemons }: { pokemons: IAllPokemons }) => {
  const { data } = pokemons;
  console.log(data);
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <Header />
      <MainContentWrapper>
        <section className="py-10">
          <h1 className="text-center mb-5">Hello git</h1>
          <h2 className="text-center mb-5">Branch</h2>
          <ul className={`flex justify-center gap-4 flex-row`}>
            {data?.allArticles.map((elem) => {
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
        </section>
      </MainContentWrapper>
    </BodyContentWrapper>
  );
};

export default PokemonsPage;
