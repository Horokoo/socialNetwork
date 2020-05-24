import React from 'react';
import NewPost from './newPost';
import Post from './post';

let Posts = () => {
    return (
        <div className="posts">
            <h2>Posts</h2>
            <NewPost />
            <Post />
        </div>
    );
}
export default Posts;