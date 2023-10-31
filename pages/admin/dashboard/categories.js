import Layout from "../../../components/admin/layout";
import db from "../../../utils/db";
import Category from "../../../models/Category";
import { useState } from "react";
import Create from "../../../components/admin/categories/Create";
import List from "../../../components/admin/categories/List";

const Categories = ({ categories })=> {
  const [data, setData] = useState(categories);

  return (
    
    <Layout>
      <div>
        <Create setCategories={setData} />
        <List categories={data} setCategories={setData} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  db.connectDB();
  const categories = await Category.find({}).sort({ updatedAt: -1 }).lean();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}


export default Categories;