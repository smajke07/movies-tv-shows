export type DataType = 'movie' | 'tv';

export interface TabInterface {
    id: DataType;
    label: string;
} 

export interface MovieInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieInterfaceExtended extends MovieInterface {
    imageURL: string;
}

export interface TVShowInterface {
    adult: false,
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
}

export interface TVShowInterfaceExtended extends TVShowInterface {
    imageURL: string;
}

interface Response {
    page: number;
    total_pages: number;
    total_results: number;
}

export interface MoviesResponse extends Response {
    results: MovieInterface[];
}

export interface TVShowsResponse extends Response {
    results: TVShowInterface[];
}

export interface DataInterface {
    movies: MovieInterfaceExtended[];
    tvShows: TVShowInterfaceExtended[];
}
