import React from "react";
// import getConfig from "next/config";

const Movie = ({ movie }) => {
  console.log("movie ", movie);
  return (
    <div>
      <h1>{movie.attributes.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: movie.attributes.description }}></p>
    </div>
  );
};
// const { publicRuntimeConfig } = getConfig();
// ^different from tutorial, EP 6
export const getServerSideProps = async (context) => {
  const { API_URL } = process.env;
  const { slug } = context.query;
  const res = await fetch(`${API_URL}/api/movies?filters[slug][$eq]=${slug}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      movie: data.data[0],
    },
  };
};

export default Movie;
