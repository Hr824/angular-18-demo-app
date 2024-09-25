export class AppSettings {

    public static readonly APP_TITLE = 'Angular 18';

    public static readonly AUTH_TOKEN_KEY = 'auth_token';

    private static readonly API_URL = 'api';

    public static readonly API_END_POINTS = {
        ARTICLES: `${this.API_URL}/articles`,
        BOOKS: `${this.API_URL}/books`,
        AUTHORS: `${this.API_URL}/authors`,
        TEMPERATURES: `${this.API_URL}/temperatures`,
        VENTES_MENSUELLES: `${this.API_URL}/ventesMensuelles`,
        MOVIES: `${this.API_URL}/movies`,
        DIRECTORS: `${this.API_URL}/directors`,
        QUESTIONS: `${this.API_URL}/questions`,
        TOKENS: `${this.API_URL}/tokens`,
        RESET_DB: 'commands/resetdb'
    };
}