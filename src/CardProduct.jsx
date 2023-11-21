import { useState, useEffect } from "react";

const useProductInfos = ( {id} ) => {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
              if (response.status >= 400) {
                throw new Error("Server error...");
              }
              return response.json();
            })            
            .then((response) => {
              setTitle(response.title),
              setCategory(response.category),
              setPrice(response.price),
              setImage(response.image)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
  }, []);

  return { title, category, price, image, error, loading };
};

const CardProduct = ( {id} ) => {
  const { title,
          category,
          price,
          image, 
          error, 
          loading } = useProductInfos( {id} );

  if (error) return <p>A network error was encoutered</p>;
  if (loading) return <p>Loading...</p>

  return (
    <>
      <p>{title}, {category}, {price}</p>
      <img src={image} />
    </>
  )
}

export default CardProduct;