import { useState } from "react";

const InputSelect = () => {

  const [category, setCategory] = useState(null);

  
  return (
    <div>
      <label htmlFor="category-select">Choose a category : </label>
        <select name="categories" id="category-select">
          <option value="">Please select a category</option>
          <option value="man">men's clothing</option>
          <option value="wonan">women's clothing</option>
          <option value="electronics">electronics</option>
          <option value="electronics">jewelery</option>
        </select>
    </div>
  )
}

 export default InputSelect;