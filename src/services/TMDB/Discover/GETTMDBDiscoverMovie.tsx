import { filterClass } from "../../../classes/filterClass";
import GETTMDBDiscoverURL from "./GETTMDBDiscoverURL";

const GETTMDBDiscoverMovie = async(filterData:filterClass) => {
    const filter_sortBy = `sort_by=${filterData.sort_by.value}`;
    const filter_includesAdults = `include_adult=${filterData.include_adult}`;
    const filter_page = `page=${filterData.page}`;
    
    const api_key = import.meta.env.VITE_TMDB_READ_API_KEY;
    const url = `${GETTMDBDiscoverURL()}/movie?${filter_includesAdults}&${filter_sortBy}&${filter_page}`;
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
export default GETTMDBDiscoverMovie;