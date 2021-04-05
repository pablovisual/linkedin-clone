import { Avatar } from '@material-ui/core';
import React, { forwardRef, useState } from 'react';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import PublicIcon from '@material-ui/icons/Public';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import "./Post.css";
TimeAgo.addDefaultLocale(en);


const Post = forwardRef(({ name, description, message, photoUrl, timestamp }, ref) => {
  const timeAgo = new TimeAgo("en-US");
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}> 
          {/**the reason we dont use any of the user bc we are already signed in with email, 
           * with either a pic or no pic so just input photoUrl instead and if no photo then 
           * the first charater of their name*/}
            {name[0]}
          </Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <div className="post__description">
              <p>{description}</p>
              <p className="centerDot">&#8226;</p>
              <p>{timeAgo.format(new Date(timestamp?.toDate().toUTCString()), "mini")}</p>
              <p className="centerDot">&#8226;</p>
              <PublicIcon fontSize="small"/>
            </div>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} color="gray" title="Like" />
          <InputOption Icon={ModeCommentOutlinedIcon} color="gray" title="Comment" />
          <InputOption Icon={ShareOutlinedIcon} color="gray" title="Share" />
          <InputOption Icon={NearMeOutlinedIcon} color="gray" title="Send" />
        </div>
     </div>
    );
})

export default Post;
