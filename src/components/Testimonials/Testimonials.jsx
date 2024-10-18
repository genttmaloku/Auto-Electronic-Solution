import React from 'react';
import "./Testimonials.css";
import sections from '../../constants/data';
import {MdStar} from "react-icons/md";

const gradient = "url(#blue-gradient)";

const Testimonials = () => {

    

  return (
    <section className='testimonials section-p bg-black' id = "testimonials">
        <div className='container'>
            <div className='testimonials-content'>
                <div className='section-t text-center'>
                    <h3>Galeria</h3>
                    <p className='text'>Eksploroni punën tonë dhe shihni rezultatet që flasin për angazhimin dhe kreativitetin tonë..</p>
                </div>

                <div className='item-list grid text-white text-center'>
                    {
                        sections.testimonials.map(testimonial => {
                           
                            return (
                                <div className='item translate-effect bg-dark' key = {testimonial.id}>
                                    <div className='item-img'>
                                        <img src = {testimonial.image} alt = "" />
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
