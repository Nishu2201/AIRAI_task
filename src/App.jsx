import React from "react";
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Navbar from "./Components/Navbar/Navbar.js"
import img1 from "./assets/img-3.jpg"
import img2 from "./assets/img-4.jpg"
import img3 from "./assets/img-5.jpg"
import img4 from "./assets/img-6.jpg"
import img5 from "./assets/project-6.png"

const images = [
  { src: img1, caption: "Pineapple" },
  { src: img2, caption: "Avacado" },
  { src: img3, caption: "Coffee Mug" },
  { src: img4, caption: "Watermelon" },
  { src: img5, caption: "404 error" }
];

const App = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <div className="carousal">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`caption-${index + 1}`} />
              <p className="caption">{image.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default App;
