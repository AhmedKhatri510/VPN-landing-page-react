import Features from "./components/Features";
import GetStarted from "./components/GetStartedPage";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import VpnDetail from "./components/VpnDetail";

function App() {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <VpnDetail />
      <Features />
      <Plan />
    </div>
  );
}

export default App;
