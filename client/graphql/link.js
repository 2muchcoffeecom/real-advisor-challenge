import {ApolloLink, HttpLink} from "@apollo/client";

const httpLink = new HttpLink({ uri: process.env.GRAPHQL_URL });
export const link = ApolloLink.from([httpLink]);
