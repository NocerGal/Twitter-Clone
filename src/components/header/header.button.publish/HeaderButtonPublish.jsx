import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function HeaderButtonPublish({ text, link }) {
  return (
    <div className="publish-button">
      <Link to={link}>
        <div className="publish-button__container">
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderButtonPublish;
