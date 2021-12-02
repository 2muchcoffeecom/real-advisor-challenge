require('dotenv').config({path: '../.env'});

module.exports = () => {
  return {
    env: {
      JSON_URL: process.env.JSON_URL,
      GRAPHQL_URL: process.env.GRAPHQL_URL,
    },
  }
}
