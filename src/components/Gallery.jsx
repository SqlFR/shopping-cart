import ProductCategory from "../data";

const Gallery = ({ category }) => {

  const allCategories = ["men's clothing", "women's clothing", "electronics", "jewelery"];
  let allCat = false
  if(category === 'all') {
    allCat = true;
  } 



  return (
    <div className="p-4">
      {allCat ? (allCategories.map((category) => (
         <ProductCategory key={category} category={category}/>)))
              : (<ProductCategory key={category} category={category}/>)}      
    </div>
  )
}

export default Gallery;