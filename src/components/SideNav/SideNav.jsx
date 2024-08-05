import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ()=> {


    return (
        <div className="side-nav">
            <div className='profile_image'>
                <br/><br/><br/><br/>
                <h3> IMAGE SPACE </h3>
                <br/><br/><br/><br/>
            </div>
            <div>
                <nav className="content">
                    <ul>
                        <li><Link to="/">Resumé</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="*">Not_Found!secret</Link></li>                     
                    </ul>
                </nav>
            </div>
            <div className='profile_social'>
                <br/><br/><br/><br/>
                <h3> SOCIALS </h3>
                <br/><br/><br/><br/>
            </div>
        </div>
    );
}
export default SideNav;
