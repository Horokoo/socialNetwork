import React from 'react';
import post from'../css/post.module.css';

let Post = () => {
    return (
        <div className={post.post}>
            <div className={post.autorsAvatar}></div>
            <div className={post.postContent}>
                <div className={post.postText}>Time to fly</div>
            </div>
        </div>
    );
}
export default Post;