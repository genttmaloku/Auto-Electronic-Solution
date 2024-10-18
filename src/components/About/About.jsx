import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.AES_About} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>Rreth Nesh</h3>
                    </div>
                    <p className = "text">AES është një kompani e specializuar në ofrimin e shërbimeve të avancuara për automjete, duke operuar që nga viti 2010. Me një ekip profesionistësh të kualifikuar, ne ofrojmë një gamë të gjerë shërbimesh, përfshirë chip tuning, diagnostikim dhe riprogramim ECU, retrofit të sistemeve, si dhe riparim dhe shumëzim të çelësave për automjete të ndryshme. AES është e angazhuar për t'iu ofruar klientëve shërbime cilësore dhe teknologji të avancuar për të përmirësuar performancën dhe efikasitetin e automjeteve të tyre. Me një përvojë të pasur dhe një histori suksesi, AES është partneri ideal për ata që kërkojnë shërbime të besueshme dhe inovative në fushën e automobilizmit.</p>
                    <p className='text'></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About