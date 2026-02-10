const GETTMDBRootURL = ():string => {
    const rootURL = import.meta.env.VITE_TMDB_URL;
    return rootURL;  
};
export default GETTMDBRootURL;

export const GETTMDBPhotoURL = (photoParameter:string) => {
    const rootPhotoURL = import.meta.env.VITE_TMDB_PHOTO_URL;
    const width = "w500";
    return `${rootPhotoURL}${width}${photoParameter}`
}