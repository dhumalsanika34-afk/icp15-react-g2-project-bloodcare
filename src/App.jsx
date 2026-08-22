import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import aboutData from "./data/about.json";

function App() {
  const path = window.location.pathname;
  console.log("current Path means current route:", path);
  if (path === "/") {
    return (
      <>
       
        <Home />
        
      </>
    );
  }
  else if (path === "/about") {
    return (
      <>
      
        <About about={aboutData} />
       
      </>
    );
  }
  else if (path === "/contact") {
    return (
      <>
       
        <Contact />
        
      </>
    );
  }
  
}
export default App