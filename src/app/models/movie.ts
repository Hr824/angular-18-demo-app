export interface Movie {
    id: number;
    title: string;
    year: number;
    duration: string;
    synopsis: string;
    directorId: number;
    director?: Director;
    types: string[];
    actors: string[];
}


export interface Director {
    id: number;
    firstname: string;
    lastname: string;
}