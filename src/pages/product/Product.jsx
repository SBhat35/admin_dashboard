import "./product.css"
import {Link} from "react-router-dom"
import Chart from"../../components/chart/Chart"
import {productData} from '../../dummyData'
import {Publish} from '@material-ui/icons'

export default function Product() {
  console.log(productData)
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to= "/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart chartData={productData} dataKey="Sales" title="Sales Performance" grid/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="productInfoImg"/>
            <span className="productName">Apple Airpods</span>
          </div>
       <div className="productInfoItem">
          <span className="productInfoKey">id:</span>
          <span className="productInfoValue">123</span>
        </div>
       <div className="productInfoItem">
          <span className="productInfoKey">sales:</span>
          <span className="productInfoValue">$5361</span>
        </div>
       <div className="productInfoItem">
          <span className="productInfoKey">active:</span>
          <span className="productInfoValue">yes</span>
        </div>
       <div className="productInfoItem">
          <span className="productInfoKey">in stock:</span>
          <span className="productInfoValue">no</span>
        </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product</label>
            <input type="text" placeholder="Apple Airpod"/>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <button className="productButton">Update</button>

            
          </div>
        
          </form>

      </div>
    </div>
  )
}
