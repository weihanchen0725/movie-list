import { Button } from 'antd';
import './MovieNavBar.scss'
import { SelectTabType } from '../../pages/App';
interface MovieNavBarParamsType {
    TabData: number;
    SetSelectedTab: React.Dispatch<React.SetStateAction<SelectTabType>>;
}

const MovieNavBar:React.FC<MovieNavBarParamsType> = ({
    TabData, SetSelectedTab
}) => {
    const navItemList = [
        {
            key: 0,
            label: "Overview"
        }, 
        {
            key: 1,
            label: "Discory"
        }];
    return (
        <div className='movie-navbar'>
            {navItemList.map((item, index) => {
                const isSelected = item.key === TabData;
                return (
                <Button key={`nav-bar-item-${index}`} variant={isSelected ? 'filled' : 'text'} ghost={!isSelected} color={isSelected ? 'primary' : undefined} value={item.key} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                    const {currentTarget} = event;
                    const currentValue = +currentTarget.value as SelectTabType;
                    SetSelectedTab(currentValue);
                }}>
                    {item.label}
                </Button>
            )
            })}
        </div>
    )
}

export default MovieNavBar;