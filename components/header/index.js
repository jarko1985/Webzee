import Ad from "./Ad";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";
import Logo from '../../public/images/logo/logo.png';

const Header = ({country}) => {
  return <header className={styles.header}>
    <Ad/>
    <Top country={country}/>
    <Main logo={Logo}/>
  </header>;
};

export default Header;
