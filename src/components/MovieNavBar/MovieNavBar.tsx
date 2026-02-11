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
    const navItemList = [{
            key: 1,
            label: "Discory"
        },
        {
            key: 0,
            label: "Overview"
        }, 
    ];
    return (
        <div className='movie-navbar'>
            {navItemList.map((item, index) => {
                const isSelected = item.key === TabData;
                return (
                <Button key={`nav-bar-item-${index}`} className={isSelected ? 'movie-navbar-item-selected' : 'movie-navbar-item'}  variant={'text'} ghost={!isSelected} value={item.key} onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                    const {currentTarget} = event;
                    const currentValue = +currentTarget.value as SelectTabType;
                    SetSelectedTab(currentValue);
                }}>
                    {item.label}
                    {isSelected && <div className='movie-navbar-item-selected-line'></div>}
                </Button>
            )
            })}
        </div>
    )
}

export default MovieNavBar;