import http from '../utils/http';
import { apiKey } from '../key';

const url = 'http://www.omdbapi.com/';

const movieService = {
    searchByName: async(name: string, page: number) => {
        try {
            const response: any = await http.get(url, {
                apikey:  apiKey,
                s: name,
                page
            });

            if(response?.Error) {
                console.log(response.Error);
                return null;
            } else {
                return {
                    totalResults: parseInt(response.totalResults, 10),
                    movies: response.Search.map((movie: any) => ({
                        id: movie.imdbID,
                        poster: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        year: movie.Year
                    }))
                }
            }
        } catch(error) {
            console.log(error);
        }
    },
    getById: async (id: string) => {
        try {
            const response: any = await http.get(url, {
                apikey:  apiKey,
                i: id
            });
        } catch(error) {
            console.log(error);
        }
    }
};

export default movieService;