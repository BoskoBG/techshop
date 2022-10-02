import React from "react";
import SingleProductListItem from "../single-product-li/SingleProductListItem";
import classes from "./ProductCarousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDots from "./custom-carousel-dots/CustomDots";

const ProductCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 600 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const carouselItems = props.products.map((product) => {
    return (
      <SingleProductListItem
        name={product.name}
        image={product.images[0]}
        key={product.id}
        price={product.price}
        categoryParam={product.categoryParam}
        subcategoryParam={product.subcategoryParam}
        productId={product.id}
      ></SingleProductListItem>
    );
  });

  return (
    <div>
      <div className={classes.title}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.container}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          renderDotsOutside={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5 "
          transitionDuration={500}
          containerClass={classes["carousel-container"]}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass={classes["dots-container"]}
          customDot={<CustomDots></CustomDots>}
          itemClass={classes.item}
        >
          {carouselItems}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
