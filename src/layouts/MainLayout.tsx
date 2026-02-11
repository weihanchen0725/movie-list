import { Layout } from "antd";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import MovieFooter from "../components/MovieFooter/MovieFooter";
import { SelectTabType } from "../pages/App";
import { ReactNode } from "react";
import './MainLayout.scss';

interface MainLayoutParamsType {
    TabData: SelectTabType;
    SetSelectedTab: React.Dispatch<React.SetStateAction<SelectTabType>>;
    children: ReactNode;
}

const MainLayout:React.FC<MainLayoutParamsType> = ({
    TabData,
    SetSelectedTab,
    children
}) => {
    return (
        <Layout className="main-layout">
            <MovieHeader TabData={TabData} SetSelectedTab={SetSelectedTab}/>
            {children}
            <MovieFooter />
        </Layout>
    )
}

export default MainLayout;