import {ApolloLink} from "@apollo/client";

import {link} from "../link";
import {tailDataQueryGql} from "../gql/tail-data-query.gql";


export const tailDataQuery = async () => {
  return new Promise((resolve, reject) => {
    ApolloLink.execute(link, {
      query: tailDataQueryGql,
    })
    .subscribe(
      ({data: {tail_data}}) => resolve(tail_data),
      (err) => reject(err),
    )
  })
}
