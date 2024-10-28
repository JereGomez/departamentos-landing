import { Routes, Route } from "react-router-dom";
import HomePage from "../views/homePage.jsx";
import DepartmentDetailPage from "../views/departmentDetailPage.jsx";
import ScrollToTop from "../utils/scrollTop.jsx"; // Import the ScrollToTop component
import ReservationPage from "../components/reservationPage.jsx";

const MainRouter = () => {
  return (
    <>
      <ScrollToTop /> {/* Include the ScrollToTop component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department/:id" element={<DepartmentDetailPage />} />
      </Routes>
    </>
  );
};

export default MainRouter;
