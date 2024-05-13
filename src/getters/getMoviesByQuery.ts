import axios from "axios";
import { FETCH_OPTIONS, NUMBER_OF_TOP_RATED } from "../utils/constants";
import { MovieInterface, MoviesResponse } from "../utils/types";

const getMoviesByQuery = async (query: string) : Promise<MovieInterface[]> => {
    try {
        const response = await axios.get( // I checked the search isn't caps lock sensitive
            `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${query.trim().toLowerCase()}`,
            FETCH_OPTIONS
        );

        const data: MoviesResponse = response.data;

        if (data && data.results && Array.isArray(data.results)) {
            return data.results.splice(0, NUMBER_OF_TOP_RATED);
        } else {
            throw new Error('Detected a change in the response interface of movies searched by query words');
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default getMoviesByQuery;
