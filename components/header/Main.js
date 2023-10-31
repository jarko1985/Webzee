import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
const Main = ({ searchHandler,logo })=> {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search || "");
  const { cart } = useSelector((state) => ({ ...state }));
    const handleSearch = (e) => {
      e.preventDefault();
      if (router.pathname !== "/browse") {
        if (query.length > 1) {
          router.push(`/browse?search=${query}`);
        }
      } else {
        searchHandler(query);
      }
    };
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <a className={styles.logo}>
          <Link href="/">
            <img src={logo.src} alt="logo" />
          </Link>
        </a>

        <form onSubmit={(e) => handleSearch(e)} className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <a className={styles.cart}>
          <Link href="/cart">
            <BsCart4 />
            <span>{cart?.cartItems?.length}</span>
          </Link>
        </a>
      </div>
    </div>
  );
}


export default Main;