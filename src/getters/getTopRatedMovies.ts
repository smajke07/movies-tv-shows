import { FETCH_OPTIONS, NUMBER_OF_TOP_RATED } from "../utils/constants";
import { MovieInterface, MoviesResponse } from "../utils/types";

const getTopRatedMovies = async () : Promise<MovieInterface[]> => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
            FETCH_OPTIONS
        );

        if (!response.ok) {
            throw new Error('Network response was not ok when getting top rated movies');
        }

        const data: MoviesResponse = await response.json();

        if (data && data.results && Array.isArray(data.results)) {
            return data.results.splice(0, NUMBER_OF_TOP_RATED);
        } else {
            throw new Error('Detected a change in the response interface of top rated movies');
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default getTopRatedMovies;
