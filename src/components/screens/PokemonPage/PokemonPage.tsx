import Image from "next/image";

import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import MainContentWrapper from "@/helpers/MainContentWrapper/MainContentWrapper";

const PokemonPage = () => {
  const metaProps = [{ name: `pokemos`, content: `choose yours pokemon` }];
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <Header />
      <MainContentWrapper>
        <section className="py-10">
          <h1 className="text-center mb-5">{pokemon.name}</h1>
          <Image
            className={`mb-4`}
            priority={true}
            src={coverImage.url}
            alt={`Photo pokemon ${pokemon.name}`}
            width={200}
            height={200}
          />
          <h2 className="text-center mb-5">Type: {title}</h2>
          <p>Skills: {alt}</p>
        </section>
      </MainContentWrapper>
    </BodyContentWrapper>
  );
};

export default PokemonPage;
