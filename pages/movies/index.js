import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const MoviesPage = ({ movies, page, totalPages }) => {
  const router = useRouter();
  return (
    <div className="container">
      <ul>
        {movies.data &&
          movies.data.map((movie) => {
            return (
              <li key={movie.id}>
                <h3>{movie.attributes.title}</h3>
              </li>
            );
          })}
      </ul>
      <button
        onClick={() => router.push(`/movies?page=${page - 1}`)}
        disabled={page <= 1}
      >
        Prev
      </button>
      <button
        onClick={() => router.push(`/movies?page=${page + 1}`)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const { API_URL } = process.env;

  const res = await fetch(
    `${API_URL}/api/movies?pagination[pageSize]=3&pagination[page]=${page}`
  );
  const data = await res.json();
  return {
    props: {
      movies: data,
      page: +page,
      totalPages: data.meta.pagination.pageCount,
    },
  };
};
export default MoviesPage;
