import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { sections } from "./Components/Sections";

function App() {
  return (
    <div className="App">
      <Navbar />
      {sections.map(({ id, component }) => (
        <div id={id}>{component}</div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
