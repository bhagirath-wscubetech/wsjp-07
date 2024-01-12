import { useEffect, useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import axios from "axios";
import Header from "./Header";

function App() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [range, setRange] = useState({ from: 0, to: 0 });

  const resetFilter = () => {
    setRange({ from: 0, to: 0 });
    setSelectedCat(null);
  }

  const getCategory = () => {
    // category api
    axios.get("https://fakestoreapi.com/products/categories")
      .then(
        (success) => {
          // console.log(success.data);
          setCategories(success.data);
        }
      ).catch(
        (error) => {
          setCategories([]);
        }
      )
  }
  const getProduct = () => {
    // product api
    axios.get("https://fakestoreapi.com/products")
      .then(
        (success) => {
          // console.log(success.data);
          setProduct(success.data);
        }
      ).catch(
        (error) => {
          setProduct([]);
        }
      )
  }

  useEffect(
    () => {
      getCategory();
      getProduct();
    },
    []
  )

  return (
    <>
      <Header products={products}/>
      <div className="grid grid-cols-4 max-w-[1200px] mx-auto gap-5">
        <Filter resetFilter={resetFilter} range={range} setRange={setRange} categories={categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <Listing range={range} products={products} selectedCat={selectedCat} />
      </div>
    </>
  );
}

export default App;
