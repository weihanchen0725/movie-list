/* eslint-disable react-hooks/exhaustive-deps */
import Card from "antd/es/card/Card";
import { movieClass } from "../../classes/movieClass";
import Meta from "antd/es/card/Meta";
import { GETTMDBPhotoURL } from "../../services/TMDB/GETTMDBRootURL";
import './MovieCard.scss'
import { useCallback, useEffect, useState } from "react";
import NoImageAvailable from '../../assets/images/NoImageAvailable.jpg'
import SkeletonImage from "antd/es/skeleton/Image";
import Skeleton from "antd/es/skeleton/Skeleton";
import { genreClass, genreArray } from "../../classes/genreClass";
import { Rate, Tooltip } from "antd";

const MovieCard: React.FC<MovieClassProps> = ({movieData, genreList}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [currentGenreList, setCurrentGenreList] = useState<string[]>([]);

    useEffect(() => {
        if(movieData){
            setTimeout(() => {
            const selectedGenreList:string[] = [];
            movieData?.genre_ids?.map((selectedGenre) => {
                const tempGenre = genreList?.find((genreItem:genreClass) => genreItem.id === selectedGenre) ?? null;
                selectedGenreList.push(tempGenre?.name ?? '');
            });
            setCurrentGenreList(selectedGenreList);
            setLoading(false);
            },2000);
        }
    },[]);
    const CheckPhotoPath = useCallback((path:string) => {
        if(path !== null && path !== undefined && path !== ''){
            return GETTMDBPhotoURL(path);
        }else{
            return NoImageAvailable;
        }
    },[]);

    return (
        <div className="movie-card-wrapper">
            <Card hoverable className="movie-card" onClick={(event:any) => {console.log(`${event}clicked`)}} cover={
                loading ? 
                <SkeletonImage active style={{width: '100%', height: '22.5rem'}} /> :
                <img className="movie-card-img" src={CheckPhotoPath(movieData.poster_path)} />
            }>
                {loading ? 
                <Skeleton active paragraph={{rows: 3, width: ['100%', '100%', '100%']}} /> :
                <Meta title={movieData.title} description={(
                    <div className="movie-card-text">
                        <div className="movie-card-text-scoreboard">
                            <Tooltip placement="top" title={
                                <div className="movie-card-title">
                                <label>Counts:&nbsp;{movieData.vote_count}</label>
                                <label>Rates:&nbsp;{movieData.vote_average/2}/5</label>
                                </div>
                                }>
                                <Rate allowHalf disabled defaultValue={movieData.vote_average/2} />
                            </Tooltip>
                        </div>
                        <Tooltip placement="top" title={
                            <label>
                                Genres:&nbsp;{currentGenreList?.map((genre, index) => (
                            <span>
                            {index !== (currentGenreList.length-1) ? 
                                <>#{genre}, </>
                                :
                                <>#{genre}</>
                            }
                            </span>
                            ))}
                            </label>
                        }>
                        <label className="movie-card-text-genres"><b>Genres:</b>&nbsp;{currentGenreList?.map((genre, index) => (
                            <span>
                            {index !== (currentGenreList.length-1) ? 
                                <i>#{genre}, </i>
                                :
                                <i>#{genre}</i>
                            }
                            </span>
                            ))}
                        </label>
                        </Tooltip>
                        <Tooltip placement="top" title={
                            <label>Description:&nbsp;{movieData.overview}</label>

                        }>
                            <label className="movie-card-text-description"><b>Description:</b>&nbsp;{movieData.overview}</label>

                        </Tooltip>
                    </div>
                )} />
                }
            </Card>
        </div>
        
      )
}

interface MovieClassProps {
    movieData : movieClass;
    genreList: genreArray;
}
export default MovieCard;