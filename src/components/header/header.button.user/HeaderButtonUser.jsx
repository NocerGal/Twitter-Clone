/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function HeaderButtonUser({
  userPicture,
  alt,
  userName,
  userAccountName,
  link,
  icon,
}) {
  return (
    <div className="button-user">
      <Link to={link}>
        <div className="button-user__image">
          <img src={userPicture} alt={alt} />
        </div>
        <div className="button-user__text">
          <p>{userName}</p>
          <span>{userAccountName}</span>
        </div>
        <div className="button-user__icon-container">
          <img className="icon" src={icon} />
        </div>
      </Link>
    </div>
  );
}

export default HeaderButtonUser;
