import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function HeaderButtons({ icon, alt, text, link }) {
  return (
    <div className="button-nav">
      <Link to={link}>
        <div className="text-icon">
          <div className="text-icon__container">
            <img src={icon} alt={alt} />
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HeaderButtons;
