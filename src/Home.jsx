import { Link } from "react-router-dom";
import Product from "./CardProduct";

function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link to='cart'>
        <button>Cart Page</button>
      </Link>
      <Product id={1}/>
    </div>
  )
}

export default Home