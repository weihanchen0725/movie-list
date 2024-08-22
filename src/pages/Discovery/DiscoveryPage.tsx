import MovieBody from "../../components/MovieBody/MovieBody";
import MovieFooter from "../../components/MovieFooter/MovieFooter";
import MovieHeader from "../../components/MovieHeader/MovieHeader";
import DiscoveryLayout from "./DiscoveryLayout";

const DiscoveryPage = () => {
    return (
        <DiscoveryLayout>
            <MovieHeader />
            <MovieBody />
            <MovieFooter />
            </DiscoveryLayout>
    )
}
export default DiscoveryPage;