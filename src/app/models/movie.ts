export interface Movie {
    id: number;
    title: string;
    year: number;
    duration: string;
    directorId: number;
    director?: Director;
}


export interface Director {
    id: number;
    firstname: string;
    lastname: string;
}