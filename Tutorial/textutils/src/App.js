import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";

function App() {
  return (
    <>   {/** JSX Fragment */}
      <Navbar title ="TextUtilis" aboutText="About<>"/>
      <TextForm title ="Enter Some Text"/>
    </>
  );
}

export default App;
