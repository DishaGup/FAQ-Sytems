import "./App.css";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {

  return (
    <div as="body" className="App">
    <Navbar/>
    <AllRoutes />
    </div>
  );
}

export default App;
