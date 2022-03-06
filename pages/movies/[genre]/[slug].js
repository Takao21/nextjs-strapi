import React from "react";

const Movie = () => {
  return (
    <div>
      <h1>Movie Title</h1>
      <p>
        Ipsum aliqua duis pariatur laborum. Aute non exercitation qui Lorem elit
        mollit excepteur enim commodo ipsum. Duis ex eu ad non minim aliqua nisi
        est. Pariatur in quis ullamco deserunt irure Lorem quis nulla deserunt
        et elit id. Est laboris pariatur labore ut pariatur ad velit excepteur
        sit elit. Non ut officia laborum adipisicing velit labore laboris amet
        fugiat ea et tempor.
      </p>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;

  return {
    props: {
      movies: [],
    },
  };
};

export default Movie;
