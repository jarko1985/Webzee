import { useSession, signIn, signOut } from "next-auth/react";
import { useMediaQuery } from "react-responsive";
import Header from "../components/header";
import Footer from "@/components/footer";
import Main from "@/components/home/main";
import db from "@/utils/db";
import Product from "@/models/Product";
import styles from "../styles/Home.module.scss";
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "../data/home";
import ProductsSwiper from "../components/productsSwiper";
import ProductCard from "@/components/productCard";
import axios from "axios";

export default function Home({ products, country }) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <Main />
        <FlashDeals />
        <div className={styles.home__category}>
          <Category
            header="Dresses"
            products={women_dresses}
            background="#5a31f4"
          />
          {!isMedium && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          {isMobile && (
            <Category
              header="Shoes"
              products={women_shoes}
              background="#3c811f"
            />
          )}
          <Category
            header="Accessories"
            products={women_accessories}
            background="#000"
          />
        </div>
        <ProductsSwiper products={women_swiper} header="FOR HER" bg="red" />
        <ProductsSwiper products={gamingSwiper} header="FOR GAMERS" bg="blue" />
        <ProductsSwiper
          products={homeImprovSwiper}
          header="FOR HOME"
          bg="brown"
        />
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=mem2xejkxtrvwj6t")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((error) => {
      console.log(error);
    });
  db.connectDB();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
