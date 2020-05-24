import React from 'react';

let Walpapper = () => {
    return (
        <div className="walpapper">
            <img src="https://lazuliportfolio.files.wordpress.com/2017/11/midnight-rhapsody.jpg?w=1200" alt="" />
            <div className="profileInfo">
                <div className="avatar"></div>
                <div className="nicknameAndStatus">
                    <div className="nickname"><h3>Lady Bird</h3></div>
                </div>
                <div className="info">
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