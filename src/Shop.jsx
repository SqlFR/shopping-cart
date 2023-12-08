import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { useState, useMemo } from "react";


const Shop = () => {

  const [category, setCategory] = useState("all");

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const galleryKey = useMemo(() => category, [category]);

  return (
    <>
      <Header />
      <div>
        <label htmlFor="category-select">Choose a category : </label>
        <select name="categories" id="category-select" onChange={handleChange}>
          <option value="all">All categories</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
      <Gallery key={galleryKey} category={category}/>
    </>    
  )
}

export default Shop;