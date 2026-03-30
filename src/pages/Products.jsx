import "../styles/Products.css"
// import { coffeeLoader } from '../component/Api'
import { Link, useLoaderData } from "react-router-dom"

const Products = () => {
  const coffeeData = useLoaderData()

  return (
    <div className="products-gen-div fade-in">
      <h1 className="prods-main-text">Our Selections</h1>

      <div className="prod-cont-all-prods">
        {
          coffeeData.map((eachCoffee, index) => (
            <Link to={`/${eachCoffee.id || index}`} className="prod-each-prod-div" key={eachCoffee.id || index}>
              <div className="prod-eachimg-div">
                <img src={eachCoffee.path} alt={eachCoffee.name} loading="lazy" />
              </div>
              <div className="prod-info-div">
                <h3 className="each-prod-name">{eachCoffee.name}</h3>
                <p className="each-prod-price">${eachCoffee.price}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div >
  )
}

export default Products