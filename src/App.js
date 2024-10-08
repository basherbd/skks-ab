import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/create" element={<EmpCreate />}></Route>

          <Route path="/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
