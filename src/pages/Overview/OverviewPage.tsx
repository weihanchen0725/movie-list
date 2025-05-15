import MovieFooter from "../../components/MovieFooter/MovieFooter";
import MovieHeader from "../../components/MovieHeader/MovieHeader";
import { PageParamsType } from "../Discovery/DiscoveryPage";
import OverviewLayout from "./OverviewLayout";

const OverviewPage:React.FC<PageParamsType> = ({
        TabData, SetSelectedTab
}) => {
return <OverviewLayout>
                <MovieHeader TabData={TabData} SetSelectedTab={SetSelectedTab}/>
                This is The Overview Page.
                <MovieFooter />
</OverviewLayout>}



export default OverviewPage;