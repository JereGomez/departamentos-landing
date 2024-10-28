import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

const GallerySection = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const galleryRef = useRef(null);

  const scrollLeftFunc = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRightFunc = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const customIndicator = (photos) => {
    return (
      <div className="carousel-indicators">
        {photos.map((photo, index) => (
          <div key={index} className="carousel-indicator">
            <img
              src={photo}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedPhoto(index)}
              className={
                selectedPhoto === index ? "cabin-image active" : "cabin-image"
              }
              style={{
                cursor: "pointer",
                border: selectedPhoto === index ? "2px solid #007bff" : "none",
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      // <button
      //   type="button"
      //   className={`carousel-indicator ${
      //     index === selectedPhoto ? "active" : ""
      //   }`}
      //   onClick={onClick}
      // />
    );
  };

  return (
    <section className="gallery-section">
      <Carousel
        activeIndex={selectedPhoto}
        onSelect={(index) => setSelectedPhoto(index)}
        indicatorTemplate={customIndicator(photos)}
        controls={true}
        interval={null} // Disable automatic sliding
      >
        {photos.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded"
              src={src}
              alt={`Scenic view ${index + 1}`}
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div
        className="cabins-gallery-grid mt-3"
        ref={galleryRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          gap: "10px",
          padding: "10px 0",
        }}
      ></div>
    </section>
  );
};

GallerySection.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GallerySection;
