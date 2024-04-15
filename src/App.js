import Contact from "./Components/Contact/contact";
import Gallery from "./Components/Galleries/gallery";
import Introduction from "./Components/Introduction/introduce";
import Menu from "./Components/Menu/menu";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Gallery />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
