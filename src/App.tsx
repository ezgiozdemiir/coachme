import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Payment from  './pages/payment/Payment'
import Messages from "./pages/messages/Messages";
import NoPage from "./pages/no-page/NoPage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Navigation/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/payment" element={<Payment/>} /> */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <div className="App"></div>
      </BrowserRouter>
    </>
  );
}

export default App;
