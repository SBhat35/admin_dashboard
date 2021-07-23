import "./newProduct.css"
import {Link} from "react-router-dom"

export default function NewProduct() {
  return (
    <div className="newProduct">
       <h1 className="newUserTitle">New Product</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"/>
        </div>
  
        <div className="newUserItem">
          <label>Stock</label>
          <input type="text" placeholder="123"/>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>


        </div>
        <Link to="/">
         <button className="newUserButton">Create</button>
        </Link>
      
      </form>
    </div>
  )
}
