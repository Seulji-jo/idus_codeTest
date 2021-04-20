import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function StarIcon({ isActive }) {
  return (
    <FontAwesomeIcon
      className={isActive ? 'star-active' : 'star-no-active'}
      icon={faCircle}
    />
  );
}

export default StarIcon;
