import React from "react";
import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <p>Followers</p>
          <span>{stats.followers}</span>
        </li>
        <li>
          <p>Views</p>
          <span>{stats.views}</span>
        </li>
        <li>
          <p>Likes</p>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;
