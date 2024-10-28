import React, { useState, useRef } from "react";
import { Carousel, Container } from "react-bootstrap";

const ImageCarouselWithScrollableIndicators = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    scrollToIndicator(selectedIndex);
  };

  const scrollToIndicator = (idx) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const indicator = container.children[idx];
      const containerWidth = container.offsetWidth;
      const indicatorWidth = indicator.offsetWidth;
      const scrollLeft =
        indicator.offsetLeft - containerWidth / 2 + indicatorWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container
      className="card h-100 "
      style={{
        backgroundColor: "rgb(231, 231, 218,0.3)",
        border: "none",
        borderRadius: "15px",
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        style={{ paddingTop: "10px" }}
      >
        {photos.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${idx + 1}`}
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div
        ref={scrollContainerRef}
        className="mt-3 d-flex overflow-auto"
        style={{
          paddingBottom: "10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {photos.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Indicator ${idx + 1}`}
            onClick={() => handleSelect(idx)}
            style={{
              width: "100px",
              height: "60px",
              objectFit: "cover",
              cursor: "pointer",
              marginRight: "10px",
              border: index === idx ? "2px solid #007bff" : "none",
              opacity: index === idx ? 1 : 0.6,
              transition: "all 0.3s ease",
              flexShrink: 0,
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default ImageCarouselWithScrollableIndicators;
