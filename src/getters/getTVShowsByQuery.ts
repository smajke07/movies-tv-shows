import { FETCH_OPTIONS, NUMBER_OF_TOP_RATED } from "../utils/constants";
import { TVShowInterface, TVShowsResponse } from "../utils/types";

const getTVShowsByQuery = async (query: string) : Promise<TVShowInterface[]> => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/tv?language=en-US&page=1&query=${query}`,
            FETCH_OPTIONS
        );

        if (!response.ok) {
            throw new Error('Network response was not ok when getting TV shows by query words');
        }

        const data: TVShowsResponse = await response.json();

        if (data && data.results && Array.isArray(data.results)) {
            return data.results.splice(0, NUMBER_OF_TOP_RATED);
        } else {
            throw new Error('Detected a change in the response interface of TV shows searched by query words');
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default getTVShowsByQuery;
