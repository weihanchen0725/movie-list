import { Header } from "antd/es/layout/layout";
import MovieNavBar from "../MovieNavBar/MovieNavBar";
import Typography from "antd/es/typography/Typography";
import './ MovieHeader.scss';
import { SelectTabType } from '../../pages/App';

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
            <Typography className="movie-title">MovieDB</Typography>
            <MovieNavBar TabData={TabData} SetSelectedTab={SetSelectedTab}/>
        </Header>
    )
}
export default MovieHeader;