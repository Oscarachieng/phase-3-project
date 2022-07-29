import React from "react";
import { Link , Outlet} from "react-router-dom";

const ProductList = ({ products, searchText,  isHovering, setIsHovering }) => {

  // Filtering the product to display
  const productsToDisplay = products.filter((product) => {
    if (searchText === "") return true;
    return product.title.toLowerCase().includes(searchText.toLowerCase())
  })
  return (
    <>
    <Outlet />
    <div
      style={{
        minHeight: "400px",
        borderColor: "orange",
        borderStyle: "groove",
        borderWidth: "1px",
        marginLeft: "40px",
        marginRight: "40px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {productsToDisplay.map((product) => {

        const { id, image, title, price, rating } = product
        return (
          <div
            style={{
              width: "250px",
              backgroundColor: "aliceblue",
              marginTop: "30px",
              textAlign: "center",
             
            }}
            key = {id}
          >
            <img
              src={image}
              alt="Product"
              style={{ width: "200px", maxHeight: "150px" }}
            />
            <h4
              style={{
                width: "250px",
                fontSize: "medium",
                marginBottom: "0px",
              }}
            >
              {title}
            </h4>
            <div style={{ display: "flex" }}>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Price : ${price}`}</h5>
              <h5
                style={{ width: "250px", fontSize: "medium", color: "orange" }}
              >{`Rating : ${rating.rate}`}</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to={`/productlist/${id}`}>More Details</Link>
              <button
                style={{
                  borderColor: "transparent",
                  color: isHovering === product.id ? "orangered" : "white",
                  backgroundColor: isHovering===product.id ? "white" : "orange",
                }}
                onMouseEnter={(()=> setIsHovering(product.id))}
                onMouseLeave={(() => setIsHovering(0))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ProductList;
