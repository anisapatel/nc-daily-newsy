import React from "react";

const Title = ({ userInfo: { avatar, user } }) => {
  return (
    <header className="Title">
      <h1>NC Daily Newsy</h1>
      <p className="sign">Signed in as: {user}</p>
      <img src={avatar} alt={user} className="img"></img>
    </header>
  );
};

export default Title;
