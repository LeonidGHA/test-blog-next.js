import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import MainContentWrapper from "@/helpers/MainContentWrapper/MainContentWrapper";

const metaProps = [{ name: `home`, content: `welcome tp site` }];

const HomePage = () => {
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <Header />
      <MainContentWrapper>
        <section className="py-10">
          <h1 className="text-center">Hello</h1>
        </section>
      </MainContentWrapper>
    </BodyContentWrapper>
  );
};

export default HomePage;
