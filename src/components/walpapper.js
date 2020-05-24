import React from 'react';

import walpapper from'../css/walpapper.module.css';

let Walpapper = () => {
    return (
        <div className={walpapper.walpapper}>
            <img src="https://lazuliportfolio.files.wordpress.com/2017/11/midnight-rhapsody.jpg?w=1200" alt="" />
            <div className={walpapper.profileInfo}>
                <div className={walpapper.avatar}></div>
                <div className={walpapper.nicknameAndStatus}>
                    <div className={walpapper.nickname}><h3>Lady Bird</h3></div>
                </div>
                <div className={walpapper.info}>
                    <p>&#128712;</p>
                    {/* <p>city: Saint-Petersburg</p>
                    <p>birthday: May 7</p>
                    <p>web-site: http://ladyB.com</p> */}
                </div>
            </div>
        </div>
    );
}
export default Walpapper;