import GETRootURL from "./GETOMDBRootURL";

const GETBySearch = async (searchValue:string="") => {
    const value = encodeURI(searchValue);
    const url = (searchValue === "" ) ? `${GETRootURL()}` : `${GETRootURL()}&s=${value}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
        
    }
    const response = await fetch(url, options);
    return response;
}
export default GETBySearch;