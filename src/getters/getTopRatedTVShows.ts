import { FETCH_OPTIONS, NUMBER_OF_TOP_RATED } from "../utils/constants";
import { TVShowInterface, TVShowsResponse } from "../utils/types";

const getTopRatedTVShows = async () : Promise<TVShowInterface[]> => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
            FETCH_OPTIONS
        );

        if (!response.ok) {
            throw new Error('Network response was not ok when getting top rated TV shows');
        }

        const data: TVShowsResponse = await response.json();

        console.log('data:', data);

        if (data && data.results && Array.isArray(data.results)) {
            return data.results.splice(0, NUMBER_OF_TOP_RATED);
        } else {
            throw new Error('Detected a change in the response interface of top rated TV shows');
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default getTopRatedTVShows;
