export class Movie {
    Id: string;
    Title: string;
    Year: number;
    Type: string;
    Poster: string;

    constructor(id: string, title: string, year: number, type: string, poster: string) {
        this.Id = id;
        this.Title = title;
        this.Year = year;
        this.Type = type;
        this.Poster = poster;
    }
}