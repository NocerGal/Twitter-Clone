import SearchBar from './suggestions.seachbar/SearchBar';

import ICON_GLASS from '../../../assets/icons/magnifying-glass-solid.svg';
import CIRCLE_CROSS from '../../../assets/icons/circle-xmark-regular.svg';
import Subscription from './suggestion.subscription/Subscription';

function Suggestions() {
  return (
    <section className="suggestions">
      <div className="suggestions__container">
        <SearchBar
          icon={ICON_GLASS}
          iconCross={CIRCLE_CROSS}
          placeholder="Chercher"
        />
        <Subscription
          title="Abonnez‑vous à Premium
          "
          text="Abonnez‑vous pour profiter de nouvelles fonctionnalités et recevoir une part des revenus publicitaires si vous respectez les critères."
          button="Souscrire"
        />
      </div>
    </section>
  );
}

export default Suggestions;
