export class genreClass{
    "id" : number;
    "name" : string;
}

export type genreArray = genreClass[];

export interface genreList {
    genres: genreArray,
}