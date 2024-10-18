import React from 'react';
import "./Portfolio.css";
import sections from '../../constants/data';

const Portfolio = () => {
  return (
    <section className='portfolio section-p bg-dark' id = "portfolio">
        <div className='container'>
            <div className='portfolio-content'>
                <div className='section-t text-center'>
                    <h3>Postimet e fundit</h3>
                    <p className='text'>Zbulo Projektet tona më të Fundit në TikTok!</p>
                </div>

                <div className='item-list text-center text-white grid'>
  {
    sections.portfolio.map(portfolio => {
      return (
        <div 
          className='item flex flex-center flex-column translate-effect' 
          key={portfolio.id} 
          style={{
            background: `url(${portfolio.image})`
          }}
          onClick={() => window.open(portfolio.tiktokUrl, '_blank')}  // Hape URL-në në dritare të re
        >
          <div className='item-title fs-25 fw-6'>{portfolio.title}</div>
          <div className='text text-white'>{portfolio.text}</div>
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

export default Portfolio
