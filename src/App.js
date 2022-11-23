import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStartedPage";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Plan from "./components/Plan";
import Testimonial from "./components/Testimonial";
import VpnDetail from "./components/VpnDetail";
import VpnNetwork from "./components/VpnNetwork";

function App() {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <VpnDetail />
      <Features />
      <Plan />
      <VpnNetwork />
      <Partners />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
