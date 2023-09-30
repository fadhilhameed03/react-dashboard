import Nav from './NaviconTemplate/nav';
import './Navigation.css'
import {TbDashboard,TbFileUpload,TbArrowsExchange} from 'react-icons/tb';
import {FiChevronLeft,FiMessageSquare} from 'react-icons/fi';
import {VscGraphLine} from 'react-icons/vsc';
import {AiOutlineUsergroupAdd,AiOutlineUserSwitch} from 'react-icons/ai';
import {MdOutlineNotificationsActive} from 'react-icons/md';
import {RiAccountCircleLine} from 'react-icons/ri';
import {BiMessageAltAdd,BiDotsHorizontalRounded} from 'react-icons/bi';
import { useState } from 'react';

const Navigation = () => {

    const[nav,setnsv] =useState(false);


  return  <div className = {'navigation ${nav && "active"}'}>

    <div className={'menu ${nav && "active"}'} onClick={() => {
      setInterval((prevState) => !prevState)
    }}>
        <FiChevronLeft className='menu-icon'/>
    </div>


    <header>
        <div className="profile">
            <img src="./src/assets/pic.jpg" alt="user-img" className="profile-img" />
        </div>
        <span>FAB</span>
    </header>
    <Nav Icon={TbDashboard} title={"Dashboard"} />
    <Nav Icon={VscGraphLine} title={"Analytics"} />
    <Nav Icon={FiMessageSquare} title={"Message"} />
    <Nav Icon={AiOutlineUsergroupAdd} title={"Followers"} />

    <div className="divider"></div>

    <Nav Icon={MdOutlineNotificationsActive} title={"Notification"} />
    <Nav Icon={RiAccountCircleLine} title={"Following"} />
    <Nav Icon={AiOutlineUserSwitch} title={"Earning"} />
    <Nav Icon={TbFileUpload} title={"Posts"} />
    <Nav Icon={BiMessageAltAdd} title={"Message Requests"} />
    <Nav Icon={AiOutlineUserSwitch} title={"Change Account"} />

    <div className="divider"></div>

    <Nav Icon={TbArrowsExchange} title="change Theme"/>
    <Nav Icon={BiDotsHorizontalRounded} title={"More Details"}/>
    
</div>   

}

export default Navigation