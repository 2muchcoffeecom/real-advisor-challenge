import {tailDataQuery} from "../graphql/query/tail-data.query";

export default function Post({ tailData }) {
  return (
    <div>
      <div>Id: {tailData?.id}</div>
      <div>Title: {tailData?.title}</div>
      <div>Description: {tailData?.description}</div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const tailData = await tailDataQuery()
  .then(tails => {
    return tails.find(({tail_entity}) => tail_entity.tail === params.id)
  });

  if (!tailData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      tailData
    }
  }
}
