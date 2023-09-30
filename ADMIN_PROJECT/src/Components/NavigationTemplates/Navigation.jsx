import Nav from './NaviconTemplate/nav';
import './Navigation.css'

const Navigation = () => {
  return  <div className = "navigation">
    <header>
        <div className="profile">
            <img src="./src/assets/pic.jpg" alt="user-img" className="profile-img" />
        </div>
        <span>Creative_Ambition</span>
    </header>
    <Nav />
    </div>;
  
}

export default Navigation