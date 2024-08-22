import GETTMDBDiscoverURL from "./GETTMDBGenresURL";

const GETTMDBGenresMovieList = async(language:string = 'en') => {    
    const api_key = import.meta.env.VITE_TMDB_READ_API_KEY;
    const url = `${GETTMDBDiscoverURL()}/movie/list?language=${language}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`,
        }
    }
    const response = await fetch(url, options);    
    return response;
}
export default GETTMDBGenresMovieList;