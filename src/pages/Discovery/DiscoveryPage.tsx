import MovieBody from "../../components/MovieBody/MovieBody";
import MovieFooter from "../../components/MovieFooter/MovieFooter";
import MovieHeader from "../../components/MovieHeader/MovieHeader";
import DiscoveryLayout from "./DiscoveryLayout";
import { SelectTabType } from "../App";

export interface PageParamsType {
    TabData: number;
    SetSelectedTab: React.Dispatch<React.SetStateAction<SelectTabType>>;
}
const DiscoveryPage:React.FC<PageParamsType> = ({
    TabData, SetSelectedTab
}) => {
    return (
        <DiscoveryLayout>
            <MovieHeader TabData={TabData} SetSelectedTab={SetSelectedTab}/>
            <MovieBody />
            <MovieFooter />
            </DiscoveryLayout>
    )
}
export default DiscoveryPage;