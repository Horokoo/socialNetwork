import React from 'react';

let NewPost = () => {
    return (
        <div className="newPost">
            <form action="" method="post">
                <textarea type="text" name="newPost" id="newPost" placeholder="New post" autoComplete="off"/>
                <button>Send</button>
            </form>
        </div>
    );
}
export default NewPost;