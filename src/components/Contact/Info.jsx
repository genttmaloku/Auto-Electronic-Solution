import React from 'react';
import "./Contact.css";
import { BsArrowRightCircle } from 'react-icons/bs';
import sections from '../../constants/data';

const Info = () => {
  
  // Funksioni për të hapur WhatsApp
  const handleClick = (phoneNumber) => {
    // Ndërto URL për WhatsApp me numrin e telefonit
    window.open(`https://wa.me/${+38348660065}`, '_blank');
  };

  return (
    <div className='info bg-md-black section-p'>
      <div className='container'>
        <div className='info-content'>
          <div className='item-list grid text-center'>
            {
              sections.contact.map(contact => {
                return (
                  <div className='item bg-dark translate-effect' key={contact.id}>
                    <span className='item-icon'>{contact.icon}</span>
                    <div 
                      className='item-info-text fw-5 text-white'
                      onClick={() => handleClick(contact.info.replace(/\D/g, ''))} // Siguro që numri është i saktë
                    >
                      {contact.info}
                    </div>
                    <p className='text'>{contact.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
