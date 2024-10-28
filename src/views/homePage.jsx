import Header from "../components/header";
import Footer from "../components/footer";
import WelcomeHero from "../components/wlecomeHero";
import AboutCarousel from "../components/aboutCarousel";
import DepartmentCards from "../components/departmentCards";
import Testimonials from "../components/testimonials";
import ReservationPage from "../components/reservationPage";
const HomePage = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundColor: "rgb(231, 231, 218,0.3)" }}
    >
      <Header />
      <WelcomeHero id="welcome" title="WelcomeHero" />
      <AboutCarousel id="carousel" title="AboutCarousel" />
      <DepartmentCards id="departmentCards" title="DepartmentCards" />
      <Testimonials id="testimonials" title="TestimonialsCards" />
      <ReservationPage id="reservation" title="Reservation" />
      <Footer id="contactFooter" title="ContactFooter" />
    </div>
  );
};

export default HomePage;
