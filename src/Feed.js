import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Avatar } from '@material-ui/core';
import FlipMove from "react-flip-move";
import "./Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    //from now on using id, and data
    useEffect(() => {
      db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
      })
    }, [])

    const sendPost = (e) => {
      e.preventDefault();

      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setInput("");
    };

    return (
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed__test">
              <Avatar className="feed__avatar" src={user?.photoUrl}>
                {user?.email[0]}
              </Avatar>
              <div className="feed__input">
                <form>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    type="text"
                    placeholder="Start a post"
                  />
                  <button onClick={sendPost} type="submit">Send</button>
                </form>
              </div>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={WallpaperIcon} color="#70b5f9" title="Photo" />
              <InputOption Icon={YouTubeIcon} color="#7fc15e" title="Video" />
              <InputOption Icon={CalendarTodayIcon} color="#e7a33e" title="Event" />
              <InputOption Icon={ListAltIcon} color="#f5987e" title="Write Article" />
            </div>
          </div>

          {/** Posts */}
          <FlipMove>
            {posts.map(( { id, data: { name, description, message, photoUrl, timestamp } }) => (
              <Post 
                key={id}
                photoId={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                timestamp={timestamp}
              />
            ))}
          </FlipMove>
        </div>
    );
}

export default Feed
