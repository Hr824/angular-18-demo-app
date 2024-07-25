import { Article } from "./article";

export interface Cart {
    articles: Article[];
    total: number;
}