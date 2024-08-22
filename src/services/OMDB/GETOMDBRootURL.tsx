const GETOMDBRootURL = ():string => {
    const url = import.meta.env.VITE_OMDB_URL;
    const api_key_value = import.meta.env.VITE_OMDB_API_KEY;
    const rootURL = `${url}?APIKEY=${api_key_value}`;
    return rootURL;  
};
export default GETOMDBRootURL;