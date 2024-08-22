import { Menu } from 'antd';
import './MovieNavBar.scss'

const MovieNavBar = () => {
    const navItems = [
        {
            key: 0,
            label: "Overview"
        }, 
        {
            key: 1,
            label: "Discory"
        }];
    return (
        <Menu theme='dark' mode="horizontal" className='movie-navbar' items={navItems} />
    )
}

export default MovieNavBar;