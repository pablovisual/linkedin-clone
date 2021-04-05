import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from "./HeaderOption";
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import "./Header.css";
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    {/**searchIcon */}
                    <SearchIcon />

                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                 <HeaderOption Icon={HomeIcon} title="home" />
                 <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                 <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                 <HeaderOption Icon={ModeCommentIcon} title="Messaging" />
                 <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                 <HeaderOption 
                   avatar={true}
                   title="Me"
                   onClick={logoutOfApp} />
            </div>
            
        </div>
    )
}

export default Header
