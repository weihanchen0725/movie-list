/* eslint-disable react-hooks/exhaustive-deps */
import './MovieBody.scss'
import { useCallback, useEffect, useState } from 'react';
import GETTMDBDiscoverMovie from '../../services/TMDB/Discover/GETTMDBDiscoverMovie';
import GETTMDBGenresMovieList from '../../services/TMDB/Genres/GETTMDBGenresMovieList';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Pagination, Select } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { resultClass } from '../../classes/resultClass';
import Filter from '../../assets/data/Filter.json';
import { categoryClass, directionClass, filterClass, sortByClass } from '../../classes/filterClass';
import { genreList } from '../../classes/genreClass';


const MovieBody = () => {

    const [movieData, setMovieData] = useState<resultClass>();
    const [filterData, setFilterData] = useState<filterClass>({
      sort_by: new sortByClass(Filter.filter_categories_map.POPULARITY, Filter.filter_directions_map.DESCEND),
      include_adult: false,
      page: 1,
    });
    const [movieGenreList, setMovieGenreList] = useState<genreList>();
    enum FilterSortBy {
        CATEGORY = 0,
        DIRECTION = 1,
      }
    
      useEffect(() => {
        GETTMDBDiscoverMovie(filterData)
        .then((response) => {
          if(response.ok){
            return response.json();
          }else{
            throw response.statusText;
          }
        })
        .then((data) => {
          setMovieData(data);
        });
      },[filterData]);
      useEffect(() => {
        GETTMDBGenresMovieList()
        .then((response) => {
          if(response.ok){
            return response.json();
          }else{
            throw response.statusText;
          }
        })
        .then((data) => {
          setMovieGenreList(data);
        });
      },[]);

      // const handleFilterCheckbox = useCallback((event:ChangeEvent<HTMLInputElement>) => {
      //   setFilterData((originalData) => ({
      //     ...originalData, 
      //     [event.target.name]: event.target.checked,
      //   }));
      // },[]);
      
      const handleFilterSortBy = useCallback((sortByType:FilterSortBy, value:string) => {
        switch(sortByType){
          case FilterSortBy.CATEGORY:{
            setFilterData((originalData) => {
              const tempSortByCategory = new categoryClass(value);
              const tempSortByFilter = new sortByClass(tempSortByCategory, originalData.sort_by.direction);
              return {...originalData, sort_by: {...tempSortByFilter}};
            });
            break;
          }
          case FilterSortBy.DIRECTION:{
            setFilterData((originalData) => {
              const tempSortByDirection = new directionClass(value);
              const tempSortByFilter = new sortByClass(originalData.sort_by.category, tempSortByDirection);
              return {...originalData, sort_by: {...tempSortByFilter}};
            });
            break;
          }
        }
      },[]);
    
      const handleFilterPagination = useCallback((pageNumber:number) => {
        setFilterData((originalData) => ({
          ...originalData,
          page: pageNumber,
        }));
      },[]);

    return (
        <div className='movie-body'>
    <div className='movie-filters'>
      <Select className='movie-filters-category' defaultValue={filterData?.sort_by.category.value} options={Filter.filter_categories_list} onChange={(valueCategory) => { handleFilterSortBy(FilterSortBy.CATEGORY, valueCategory); }} />
      <Select className='movie-filters-direction' defaultValue={filterData?.sort_by.direction.value} options={Filter.filter_directions_list} onChange={(valueDirection) => { handleFilterSortBy(FilterSortBy.DIRECTION, valueDirection); }} />
      {/* <Checkbox name='include_adult' checked={filterData?.include_adult} onChange={handleFilterCheckbox}>Includes Adult</Checkbox> */}
    </div>
    <div className='movie-filters-results'>
    <Typography>Total&nbsp;{movieData?.total_results}&nbsp;Found</Typography>
    </div>
    <div className='movie-wrapper'>
      {movieData && movieData.results && movieData.results.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} genreList={movieGenreList?.genres ?? []}  />
        ))}
        </div>
        <Pagination onChange={(pageNumber:number)=>{handleFilterPagination(pageNumber)}} total={movieData?.total_results} defaultPageSize={20} showSizeChanger={false}  defaultCurrent={filterData.page} />
  </div>
    )
}
export default MovieBody;