import { Header } from "antd/es/layout/layout";
import MovieNavBar from "../MovieNavBar/MovieNavBar";
import Typography from "antd/es/typography/Typography";
import './ MovieHeader.scss';
import { SelectTabType } from '../../pages/App';
import { Clapperboard } from 'lucide-react';

interface MovieHeaderParamsType {
    TabData: number;
    SetSelectedTab: React.Dispatch<React.SetStateAction<SelectTabType>>;
}

const MovieHeader:React.FC<MovieHeaderParamsType> = ({
    TabData,
    SetSelectedTab
}) => {
    return (
        <Header className="movie-header">
            <div className="movie-header-title">
                <Clapperboard className="movie-title-icon"/>
                <Typography className="movie-title">Cine<Typography className="movie-title-find">Find</Typography></Typography>
            </div>
            <div className="movie-header-nav">
                <MovieNavBar TabData={TabData} SetSelectedTab={SetSelectedTab}/>
            </div>
        </Header>
    )
}
export default MovieHeader;