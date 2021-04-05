import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

    /**create a function that adds discover # items below recent title */
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1" alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar" >
              {user?.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
          </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>who viewd you</p>
            <p className="sidebar__statNumber">3,000</p>
          </div>

          <div className="sidebar__stat"> 
            <p>Views on post</p>
            <p className="sidebar__statNumber">3,200</p>
          </div>
        </div>

          <div className="sidebar__bottom">
            <p>recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
          </div>
        </div>
    )
}

export default Sidebar
