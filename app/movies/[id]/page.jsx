import MovieCredit from "../../../components/movie-credit";
import MovieDetail from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";
import { API_URL } from "../../constant";

// async function getMovie(id) {
//   const response = await fetch(`${API_URL}/${id}`);
//   const json = await response.json();
//   return json;
// }

export default async function Movie({ params: { id } }) {
  return (
    <div>
      <MovieDetail id={id} />
      <MovieCredit id={id} />
      <MovieVideo id={id} />
    </div>
  );
}
