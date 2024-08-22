import { Header } from "antd/es/layout/layout";
import MovieNavBar from "../MovieNavBar/MovieNavBar";
import Typography from "antd/es/typography/Typography";
import './ MovieHeader.scss';

const MovieHeader = () => {
    return (
        <Header className="movie-header">
            <Typography className="movie-title">MovieDB</Typography>
            <MovieNavBar />
        </Header>
    )
}
export default MovieHeader;