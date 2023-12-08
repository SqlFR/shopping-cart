import { useEffect, useState } from "react";
import { Button } from "./components/Button";

const useProductCategory = ({ category }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error("Server error...");
        }
        return response.json();
        })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
  }, []);


  return { products , error, loading }
}

function limitString(string) {
  if(string.length > 60) {
    return string.substring(0, 60) + '...';
  }
  return string
}



const ProductCategory = ({ category }) => {
  const { products, 
          error,
          loading} = useProductCategory({ category })

  if (error) return <p>A network error was encoutered</p>;  

  return (
    <div>{category.charAt(0).toUpperCase() + category.slice(1)}
      <div className="flex flex-wrap pb-10">
        {products.map((product) => {
          return (   
            <div key={product.id} className="flex mr-10">       
              <div className="flex flex-col justify-between border border-black rounded-xl w-44">
                <div className="p-5">
                  <img src={product.image} />
                </div>

                <div className="flex flex-col justify-between h-52 bg-gray-200 rounded-b-xl p-2">
                  <p className="text-justify">{limitString(product.title)}</p>
                  <div>
                    <p className="my-2 text-sm text-sky-700">{product.category}</p>
                    <p className="text-green-900">$ {product.price}</p>
                  </div>
                 <Button product={product}/>
                </div>
              </div>
            </div>         
            )
        })}
      </div>
      
    </div>
  )
}

export default ProductCategory;
// const useProductInfos = ( {choiceArticle} ) => {
//   const [title, setTitle] = useState(null);
//   const [category, setCategory] = useState(null);
//   const [price, setPrice] = useState(null);
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${choiceArticle}`)
//             .then(response => {
//               if (response.status >= 400) {
//                 throw new Error("Server error...");
//               }
//               return response.json();
//             })            
//             .then((response) => {
//               setTitle(response.title),
//               setCategory(response.category),
//               setPrice(response.price),
//               setImage(response.image)
//             })
//             .catch((error) => setError(error))
//             .finally(() => setLoading(false))
//   }, []);

//   return { title, category, price, image, error, loading };
// };