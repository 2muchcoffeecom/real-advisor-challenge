import gql from "graphql-tag";

export const tailDataQueryGql = gql`
    query tailData {
        tail_data {
            tail_entity {
                json_id
                tail
            }
            description
            id
            title
        }
    }
`
