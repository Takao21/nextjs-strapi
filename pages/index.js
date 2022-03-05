import fetch from "isomorphic-unfetch";

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <div className="Home">
      <h1>I&apos;m HomePage.</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/api/movies`);
  const data = await res.json();
  return {
    props: {
      movies: data,
    },
  };
};

export default Home;
