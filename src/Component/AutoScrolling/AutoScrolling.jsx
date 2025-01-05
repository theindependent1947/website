import React from 'react';
import './AutoScrolling.css';

const AutoScrolling = ({ images }) => {  
    return (
      <div className="logos">
        <div className="logos-slide">
          {images.map((imageUrl, index) => (
            imageUrl.icon
          ))}
        </div>
        <div className="logos-slide">
          {images.map((imageUrl, index) => (
             imageUrl.icon
          ))}
        </div>
      </div>
    );
};

export default AutoScrolling;