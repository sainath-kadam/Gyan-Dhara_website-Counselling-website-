import {
  Navbar,
  Home,
  About,
  Councellor,
  Yt_channel,
  Domains,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Domains />
      <Councellor />
      <Yt_channel/>
      <Footer />
    </div>
  );
}

export default App;
