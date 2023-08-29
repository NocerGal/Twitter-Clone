import PropTypes from 'prop-types';

function SearchHistory({ text, display }) {
  return (
    <div
      className="search--history"
      style={{ display: display ? 'block' : 'none' }}
    >
      <div className="search--history__container">
        <span>{text}</span>
      </div>
    </div>
  );
}

SearchHistory.propTypes = {
  text: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
};

export default SearchHistory;
