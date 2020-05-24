import React from 'react';
import Walpapper from './walpapper';
import Posts from './posts';

let Content = () => {
    return (
        <div className="content">
            <Walpapper />
            <Posts />
        </div>
    );
}

export default Content;