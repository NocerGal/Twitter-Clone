import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchHistory from './suggestions.seachbar.history/SearchHistory';

function SearchBar({ icon, placeholder, iconCross }) {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(!focused);
  };

  return (
    <div className={`searchbar ${focused ? 'focused' : ''}`}>
      <form action="#">
        <div className="searchbar__icon">
          <img
            src={icon}
            alt="
magnifying glass"
          />
        </div>
        <div className="searchbar__input">
          <input
            type="text"
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleFocus}
          />
        </div>
        <div
          className="searchbar__cross"
          style={{ display: focused ? 'block' : 'none' }}
        >
          <img src={iconCross} alt="cross erease" />
        </div>
      </form>
      <SearchHistory
        text="Essayez de chercher des personnes, des Listes, ou des mots-clés."
        display={focused}
      />
    </div>
  );
}

SearchBar.propTypes = {
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconCross: PropTypes.string.isRequired,
};

export default SearchBar;
