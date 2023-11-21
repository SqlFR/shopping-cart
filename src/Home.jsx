import { Link } from "react-router-dom";
import Product from "./components/CardProduct";
import Header from "./components/Header";

function Home() {
  return (
    <div>
      <Header />
      <p>Home page</p>
      <Link to='cart'>
        <button>Cart Page</button>
      </Link>
      <Product id={1}/>
    </div>
  )
}

export default Home