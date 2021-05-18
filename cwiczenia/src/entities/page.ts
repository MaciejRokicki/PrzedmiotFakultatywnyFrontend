export class Page<T> {
    TotalResults: number;
    CurrentPage: number;
    Pages: number;
    Items: Array<T>;
    Response: boolean;

    constructor(totalResults: number, currentPage: number, items: Array<T>, response: boolean) {
        this.TotalResults = totalResults;
        this.CurrentPage = currentPage;
        this.Pages = Math.ceil(totalResults / 10);
        this.Items = items;
        this.Response = response;
    }
}