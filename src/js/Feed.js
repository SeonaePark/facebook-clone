import React, { useEffect } from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';
import { useState } from 'react';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => ({id: doc.id, data:doc.data()})))
        ))
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post)=>(
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                    image={post.data.image}
                    username={post.data.username}
                />
            ))}
        </div>
    )
}

export default Feed
