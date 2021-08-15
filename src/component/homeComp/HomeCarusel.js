import React from 'react';
import Slider from "react-slick";
import '../../style/home.scss'
function HomeCarusel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
      <div>
          <div className='slick-ca'>
              <Slider {...settings}>
                  <div>
                      <div className="carusel-H">
                          <img className='img-fluid' src="/img/car.png" alt=""/>
                      </div>
                  </div>
                  <div>
                      <div className="carusel-H">
                          <img  className='img-fluid' src="/img/car-1.png" alt=""/>
                      </div>
                  </div>
                  <div>
                      <div className="carusel-H">
                          <img className='img-fluid' src="/img/bachimg.png" alt=""/>
                      </div>
                  </div>
              </Slider>
          </div>
          <div className="container">
              <div className="home-h-theme">
                  <p>БРЕНДЫ</p>
              </div>
          </div>
      </div>
    );
}

export default HomeCarusel;