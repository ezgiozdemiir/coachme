import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
        <div className="App"></div>
      </BrowserRouter>
    </>
  );
}

export default App;
