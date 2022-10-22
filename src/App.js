import "./App.css";
import RequestQuote2 from "./components/RequestQuote2";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      {/* <RequestQuote2 /> */}
      <Routes>
        <Route path="/requestquote" element={<RequestQuote2 />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
