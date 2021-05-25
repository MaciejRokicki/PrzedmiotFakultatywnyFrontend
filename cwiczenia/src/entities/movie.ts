export class Movie {
    imdbID: string;
    Title: string;
    Year: number;
    Type: string;
    Poster: string;

    constructor(imdbID: string, title: string, year: number, type: string, poster: string) {
        this.imdbID = imdbID;
        this.Title = title;
        this.Year = year;
        this.Type = type;
        this.Poster = poster;
    }
}