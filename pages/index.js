import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

const Home = ({ movies }) => {
  console.log(movies.data);
  return (
    <div className="container">
      {movies.data.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;
  console.log("api", API_URL);
  const res = await fetch(`${API_URL}/api/movies?populate=*`);
  const data = await res.json();
  return {
    props: {
      movies: data,
    },
  };
};

export default Home;
