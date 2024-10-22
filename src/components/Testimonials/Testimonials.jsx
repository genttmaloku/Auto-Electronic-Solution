import React from 'react';
import "./Testimonials.css";
import sections from '../../constants/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Hiq Pagination nga importet
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section className='testimonials section-p bg-black' id="testimonials">
      <div className='container'>
        <div className='testimonials-content'>
          <div className='section-t text-center'>
            <h3>Galeria</h3>
            <p className='text'>
              Eksploroni punën tonë dhe shihni rezultatet që flasin për angazhimin dhe kreativitetin tonë..
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}  
            speed={1000}
            modules={[Autoplay]} // Hiq Pagination nga modulet
            className="mySwiper"
          >
            {
              sections.testimonials.map(testimonial => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <div className='item translate-effect bg-dark'>
                      <div className='item-img'>
                        <img src={testimonial.image} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
