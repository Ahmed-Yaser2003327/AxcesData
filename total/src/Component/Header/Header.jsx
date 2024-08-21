import Avatar from '../Avatar/Avatar';
import favicon from "../S-image/favicon.png";
import './Header.css';

const Header = () =>
{

   return (
     <header>

       <ul className="navLinks">
         <li className="navLink active">Home</li>
         <li className="navLink">About</li>
         <li className="navLink">Services</li>
         <li className="navLink">Contacts</li>
       </ul>
       <img className="Avatar1 " src={favicon} alt='user-avatar' />
      
     </header>
   );
}

export default Header;
