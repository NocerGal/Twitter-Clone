import FluxPost from './flux.post/FluxPost';
import FluxWelcome from './flux.welcome/FluxWelcome';

// Image-Icones
import USER_PICTURE from '../../../assets/pictures/user.pictures/10299952_10202488682711258_2517966597345456293_n.jpg';
import PICTURE from '../../../assets/icons/image-regular.svg';
import GIF from '../../../assets/icons/camera-solid.svg';
import LIST from '../../../assets/icons/list-solid.svg';
import SMILE from '../../../assets/icons/face-smile-regular.svg';
import CALENDAR from '../../../assets/icons/calendar-days-solid.svg';
import GPS from '../../../assets/icons/location-dot-solid.svg';

function MainFlux() {
  return (
    <section className="flux">
      <FluxWelcome
        welcome="Accueil"
        forYou="Pour vous"
        subscriptions="Abonnements"
      />

      <FluxPost
        usePicure={USER_PICTURE}
        placeholder="Quoi de neuf"
        postText="Poster"
        iconPicture={PICTURE}
        iconGif={GIF}
        iconList={LIST}
        iconSmile={SMILE}
        iconeCalendar={CALENDAR}
        iconGps={GPS}
      />
    </section>
  );
}

export default MainFlux;
