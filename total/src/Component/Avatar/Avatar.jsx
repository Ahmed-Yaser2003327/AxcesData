import avatarImg from '../S-image/3.avif';
import favicon from "../S-image/favicon.png";
import './Avatar.css';

const Avatar = ({src = avatarImg}) =>
{
   return (
      // <img className="Avatar" src={src ? src : avatarImg} alt='user-avatar' />
      <img className="Avatar " src={src} alt='user-avatar' />
   )
}

export default Avatar
