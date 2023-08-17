// icons
import ICON_X from '../../assets/icons/x-twitter.svg';
import ICON_HOME from '../../assets/icons/house-chimney-window-solid.svg';
import ICON_SEARCH from '../../assets/icons/magnifying-glass-solid.svg';
import ICON_BELL from '../../assets/icons/bell-regular.svg';
import ICON_ENVELOPE from '../../assets/icons/envelope-regular.svg';
import ICON_LIST from '../../assets/icons/list-solid.svg';
import ICON_BOOKMARK from '../../assets/icons/bookmark-regular.svg';
import ICON_COMMUNITY from '../../assets/icons/user-group-solid.svg';
import ICON_CERTIFICATION from '../../assets/icons/check-solid.svg';
import ICON_USER from '../../assets/icons/user-solid.svg';
import ICON_MORE from '../../assets/icons/ellipsis-solid.svg';
// pictures
import USER_PICTURE from '../../assets/pictures/user.pictures/10299952_10202488682711258_2517966597345456293_n.jpg';
// components
import HeaderButtons from './header.buttons/HeaderButtons';
import HeaderPublishButton from './header.button.publish/HeaderButtonPublish';
import HeaderButtonUser from './header.button.user/HeaderButtonUser';
// react
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="x">
          <Link to="/">
            <div className="x__container">
              <img src={ICON_X} alt="logo X" id="logo" />
            </div>
          </Link>
        </div>
        <HeaderButtons icon={ICON_HOME} alt="navigate to home" text="Accueil" />
        <HeaderButtons
          icon={ICON_SEARCH}
          alt="navigate to search"
          text="Explorer"
          link="/"
        />
        <HeaderButtons
          icon={ICON_BELL}
          alt="navigate to notifications"
          text="Notifications"
          link="/"
        />
        <HeaderButtons
          icon={ICON_ENVELOPE}
          alt="navigate to messages"
          text="Messages"
          link="/"
        />
        <HeaderButtons
          icon={ICON_LIST}
          alt="navigate to lists"
          text="Listes"
          link="/"
        />
        <HeaderButtons
          icon={ICON_BOOKMARK}
          alt="navigate to bookmarks"
          text="Signets"
          link="/"
        />
        <HeaderButtons
          icon={ICON_COMMUNITY}
          alt="navigate to communities"
          text="Communités"
          link="/"
        />
        <HeaderButtons
          icon={ICON_CERTIFICATION}
          alt="navigate to certification"
          text="Certifié"
          link="/"
        />
        <HeaderButtons
          icon={ICON_USER}
          alt="navigate to user"
          text="Profil"
          link="/"
        />

        <HeaderButtons
          icon={ICON_MORE}
          alt="navigate to more"
          text="Plus"
          link="/"
        />
        <HeaderButtons icon={ICON_LIST} alt="navigate to liste" text="Listes" />
        <HeaderPublishButton text="Poster" link="/" />
      </nav>

      <HeaderButtonUser
        userPicture={USER_PICTURE}
        alt="user picture"
        userName="SCHENHERR"
        userAccountName="@NoC67410"
        link="/"
        icon={ICON_MORE}
      />
    </header>
  );
}

export default Header;
