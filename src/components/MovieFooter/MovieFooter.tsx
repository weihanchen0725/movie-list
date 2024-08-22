import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import './MovieFooter.scss';
import { Breadcrumb } from "antd";

const MovieFooter = () => {
    const profileList = {
        github: {
            title: <><IconBrandGithub />GitHub</>,
            link: 'https://github.com/weihanchen0725'
        },
        linkedin: {
            title: <><IconBrandLinkedin />LinkedIn</>,
            link: 'www.linkedin.com/in/weihanchen0725'
        }
    }
    
    return (
        <div className="movie-footer">
        <Breadcrumb items={[
            {
                title: <a className='movie-footer-links' href={profileList.github.link}>{profileList.github.title}</a>
            },
            {
                title: <a className='movie-footer-links' href={profileList.linkedin.link}>{profileList.linkedin.title}</a>
            }
        ]} />
        </div>
    )
}
export default MovieFooter;