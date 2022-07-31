import React, { useState, useEffect } from "react";


const IntroImageSlide =({ products }) => {

    const [index, setIndex] = useState(0)

    useEffect(()=> {
      const lastIndex = products.length - 1;

      if(index > 0) {
          setIndex(lastIndex);
      }
      if(index > lastIndex){
          setIndex(0)
      }
    },[index, products]);

    useEffect (() => {
        let slider = setInterval(()=> {
            setIndex(index + 1)
        },6000);
        return () => {
            clearInterval(slider)
        }
    }, [index]);

   return (
       <section className="side-show-container">
           {products.map((product,productIndex) => {
               const { id, image, title, price }= product;
               let position = "nextSlide";
               if(productIndex === index) {
                   position = "activeSlide";
               }
               if(productIndex === index-1 || (index === 0 && productIndex === product.length -1)) {
                   position = "lastSlide";
               }
               return (
                   <article className={position} key = {id}>
                          <img src = {image} alt ={title} className = "slideImage"/>
                          <div className="description-slider">
                              <h4 className="title">{title}</h4>
                              <h4 className="price">{price}</h4>
                          </div>
                   </article>
               )

           })}
       </section>
   )

}
export default IntroImageSlide;