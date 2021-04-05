import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {/**this is if we get passed an icon from header.js */}
            {Icon && <Icon className="headerOption__icon" />}
            {/**this is if we get passed an avatar from header.js */}
            {avatar && ( /*so we pass in the photourl that the user inputs if no photourl is given
            then we use their first letter of their first name to be photo*/
                <Avatar className="headerOption__icon" src={user?.photoUrl}>
                  {user?.email[0]}
                </Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
