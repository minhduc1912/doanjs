import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'slate',
  };

  const containerStyle = {
    margin: 'auto',
    padding: '8px',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.6rem',
  };

  const addressStyle = {
    marginRight: '1rem',
  };

  const contactInfoStyle = {
    marginRight: '1rem',
  };

  const linkStyle = {
    fontSize: '2rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  };

  const facebookHoverStyle = {
    color: 'blue',
  };

  const instagramHoverStyle = {
    color: 'pink',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={titleStyle}>Tiem hoa tuoi tai Da Nang</p>
        <div className='flex justify-center mt-4'>
          <div style={addressStyle}>
            <p><strong>ADDRESS:</strong> 11 Mỹ An 25, Phường Mỹ An, Quận Ngũ Hành Sơn, Da Nang, Vietnam</p>
          </div>
          <div style={contactInfoStyle}>
            <p><strong>TELEPHONE:</strong> 0898.232.039 - 032.66.77.144</p>
          </div>
          <div>
            <p><strong>EMAIL:</strong> cosy.florist@gmail.com</p>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <a href='https://www.facebook.com/CosyFloristHoaTuoiDaNang' target='_blank' rel='noreferrer'>
            <FaFacebook style={linkStyle} className='text-2xl mx-4' />
          </a>
          <a href='https://www.instagram.com/cosy_florist/' target='_blank' rel='noreferrer'>
            <FaInstagramSquare style={linkStyle} className='text-2xl mx-4 hover:'  />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
