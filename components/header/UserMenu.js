import { signOut,signIn } from "next-auth/react";
import Link from "next/link";
import styles from "./styles.module.scss";


const UserMenu = ({session})=> {
  return (
    <div className={styles.menu}>
      <h4>Welcome to WEBZEE !</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session.user.image} alt="profile pic" className={styles.menu__img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session.user.name}</h3>
            <h6>{session.user.email}</h6>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;