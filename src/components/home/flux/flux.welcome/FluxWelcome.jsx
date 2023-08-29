import PropTypes from 'prop-types';
import { useState } from 'react';

function FluxWelcome({ welcome, forYou, subscriptions }) {
  const [activeBorder, setactiveBorder] = useState(true);
  const [selectedTab, setSelectedTab] = useState(forYou);

  const handleSelected = (newTab) => {
    if (selectedTab !== newTab) {
      setactiveBorder(!activeBorder);
      setSelectedTab(newTab);
    }
  };
  return (
    <div className="flux__welcome">
      <div className="flux__welcome__container">
        <div className="flux__welcome__container__1">
          <span>{welcome}</span>
        </div>
        <div className="flux__welcome__container__2">
          <nav>
            <div className="flux__welcome__container__2--text">
              <div
                className="flux__welcome__container__2--text__container"
                onClick={() => handleSelected(forYou)}
              >
                <div className="span--container">
                  <div>
                    <span className={`${activeBorder ? 'active' : ''}`}>
                      {forYou}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flux__welcome__container__2--text__container"
                onClick={() => handleSelected(subscriptions)}
              >
                <div className="span--container">
                  <div>
                    <span className={`${activeBorder ? '' : 'active'}`}>
                      {subscriptions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

FluxWelcome.propTypes = {
  welcome: PropTypes.string.isRequired,
  forYou: PropTypes.string.isRequired,
  subscriptions: PropTypes.string.isRequired,
};

export default FluxWelcome;
