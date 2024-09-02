import { Link } from 'react-router-dom';
import './SideNav.css';
import profilePic from '../../assets/images/profilePic.png';

const SideNav = ()=> {


    return (
        <div className="side-nav">
            <figure className='profile_image'>
                    <img src={profilePic} alt="" />
            </figure>
            <div>
                <nav className="content">
                    <ul>
                        <li><Link to="/">Resumé</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        {/* <li><Link to="*">Not_Found!secret</Link></li> */}                     
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
