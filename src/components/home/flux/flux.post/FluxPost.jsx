import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FluxPost({
  usePicure,
  placeholder,
  postText,
  iconPicture,
  iconGif,
  iconList,
  iconSmile,
  iconeCalendar,
  iconGps,
}) {
  return (
    <div className="flux__container">
      <div className="flux__container__flex">
        <div className="flux__container__user--pic">
          <Link>
            <img
              src={usePicure}
              alt="user picture"
              className="user--picture__icon"
            />
          </Link>
        </div>
        <div className="flux__container__text">
          <div className="flux__container__text__input">
            <input placeholder={placeholder} />
          </div>
          <div className="flux__container__text__post">
            <div className="flux__container__text__post__icons">
              <div className="container--icon">
                <img
                  src={iconPicture}
                  alt="icon picture"
                  className="icon-class"
                />
              </div>
              <div className="container--icon">
                <img src={iconGif} alt="icon iconGif" className="icon-class" />
              </div>
              <div className="container--icon">
                <img
                  src={iconList}
                  alt="icon iconList"
                  className="icon-class"
                />
              </div>
              <div className="container--icon">
                <img
                  src={iconSmile}
                  alt="icon iconSmile"
                  className="icon-class"
                />
              </div>
              <div className="container--icon">
                <img
                  src={iconeCalendar}
                  alt="icon iconeCalendar"
                  className="icon-class"
                />
              </div>
              <div className="container--icon">
                <img src={iconGps} alt="icon iconGps" className="icon-class" />
              </div>
            </div>
            <div className="flux__container__text__post__button">
              <button className="publish-button">
                <div className="publish-button__container">
                  <span>{postText}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FluxPost.propTypes = {
  usePicure: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  iconPicture: PropTypes.string.isRequired,
  iconGif: PropTypes.string.isRequired,
  iconList: PropTypes.string.isRequired,
  iconSmile: PropTypes.string.isRequired,
  iconeCalendar: PropTypes.string.isRequired,
  iconGps: PropTypes.string.isRequired,
};

export default FluxPost;
