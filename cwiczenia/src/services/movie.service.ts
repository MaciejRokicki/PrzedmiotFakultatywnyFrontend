import http from '../utils/http';
import { apiKey } from '../key';
import { Page } from '../entities/page';
import { Movie } from '../entities/movie';

const url = 'http://www.omdbapi.com/';

const movieService = {
    searchByName: async(name: string, page: number): Promise<Page<Movie> | undefined> => {
        try {
            const response: any = await http.get(url, {
                apikey:  apiKey,
                s: name,
                page
            });

            if(response?.Error) {
                console.log(response.Error);
                return undefined;
            } else {
                return new Page<Movie>(
                    parseInt(response.totalResults, 10),
                    page,
                    response.Search,
                    true
                );
            }
        } catch(error) {
            console.log(error);
        }
    },
    getById: async (id: string): Promise<Movie | undefined> => {
        try {
            const response: any = await http.get(url, {
                apikey:  apiKey,
                i: id
            });

            if(response?.Error) {
                console.log(response.Error);
                return undefined;
            } else {
                return new Movie(
                    response.id,
                    response.title,
                    response.year,
                    response.type,
                    response.poster
                )
            }
        } catch(error) {
            console.log(error);
        }
    }
};

export default movieService;