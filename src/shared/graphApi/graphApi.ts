import { GraphQLClient } from "graphql-request";

// interface IHeaders {
//   authorization: string,

// }

export function request({
  query,
  variables,
}: {
  query: any,
  variables: any,
  
}) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient("https://graphql.datocms.com", { headers });

  return client.request(query, variables);
}
