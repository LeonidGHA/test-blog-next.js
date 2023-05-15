import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

import { IMetaPropsItem } from "./HeadLayoutModels";

const HeadLayout = ({ metaProps }: { metaProps: IMetaPropsItem[] }) => {
  return (
    <Head>
      <title>Create Next App</title>
      {metaProps?.map((metaItem) => {
        return (
          <meta
            name={metaItem.name}
            content={metaItem.content}
            key={uuidv4()}
          />
        );
      })}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadLayout;
