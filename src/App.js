import Features from "./components/Features";
import GetStarted from "./components/GetStartedPage";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Plan from "./components/Plan";
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
    </div>
  );
}

export default App;
