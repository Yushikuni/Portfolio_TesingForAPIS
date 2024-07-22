import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ()=> {


    return (
        <div className="side-nav">
            <div className='profile_image'>
                <h3> IMAGE SPACE </h3>
            </div>
            <div>
                <nav className="content">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="*">NotFound!</Link></li>                     
                    </ul>
                </nav>
            </div>
            <div className='profile_social'>
                <h3> SOCIALS </h3>
            </div>
        </div>
    );
}
export default SideNav;
