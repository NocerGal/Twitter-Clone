import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Subscription({ title, text, button }) {
  return (
    <div className="subcription">
      <aside className="subscription__container">
        <h2>{title}</h2>
        <div className="subscription__container__text">
          <p>{text}</p>
        </div>
        <Link to="/">
          <div className="subscription__container__button">
            <span>{button}</span>
          </div>
        </Link>
      </aside>
    </div>
  );
}

Subscription.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Subscription;
