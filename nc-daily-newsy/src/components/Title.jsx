import React from "react";

const Title = ({ userInfo: { avatar, user } }) => {
  return (
    <header className="Title">
      <div className="redditTitle">
        <img
          className="redditImg"
          src="https://img.icons8.com/ios/50/000000/reddit.png"
          alt="reddit icon"
        ></img>
        <h1>nc daily newsy</h1>
      </div>

      <p className="sign">Signed in as: {user}</p>
      <img src={avatar} alt={user} className="img"></img>
    </header>
  );
};

export default Title;
