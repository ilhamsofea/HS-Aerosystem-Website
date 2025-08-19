// App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToHash from "./pages/ScrollToHash";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Journey from "./pages/Journey";
import Mission from "./pages/Mission";
import Certification from "./pages/Certification";
import Team from "./pages/Team";
import Customer from "./pages/Customer";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Activity from "./pages/Activity";
import ProductApp from "./pages/ProductApp";
import ProcessCap from "./pages/ProcessCap";
import Recognition from "./pages/Recognition";
import Csr from "./pages/Csr";
import CsrDetails from "./pages/CsrDetail";
import Hear from "./pages/Hear";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Header />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/process" element={<ProcessCap />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/product" element={<ProductApp />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/csr/:id" element={<CsrDetails />} />
        <Route path="/hear" element={<Hear />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
