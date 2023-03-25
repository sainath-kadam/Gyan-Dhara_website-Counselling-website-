import {
  Navbar,
  Home,
  About,
  Councellor,
  Domains,
  Yt_channel,
  
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
