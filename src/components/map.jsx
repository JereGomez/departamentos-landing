import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
}

export default function Map() {
  const isSmallScreen = useIsSmallScreen();

  if (isSmallScreen) {
    return null; // Do not render the map on small screens
  }

  return (
    <MDBRow className="w-100">
      <MDBCol className="my-5">
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </MDBCol>
    </MDBRow>
  );
}
