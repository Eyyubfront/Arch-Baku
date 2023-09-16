import About from "../pages/About/about";
import Contacts from "../pages/Contacts/contact";
import Home from "../pages/Home/home";
import Projects from "../pages/Projects/projects";
import Service from "../pages/Service/service";
import Vakansiya from "../pages/Vakanciya/vakansiya";
import Xeber from "../pages/Xeber/xeber";
import { Route, Routes } from "react-router";
import Xebersingle from "../pages/Xebersingle/xebersing";
import Servicesingle from "../pages/Servicsingle/servicesing";
import Projectssingle from "../pages/Projectssingle/projectsing";
import Vakansiyalink from "../pages/Vakansiyalink/linksd";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vakansiya" element={<Vakansiya />} />
      <Route path="/vakansiya:id" element={<Vakansiyalink/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects:id" element={<Projectssingle />} />
      <Route path="/service" element={<Service />} />
      <Route path="/service:id" element={<Servicesingle />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/about" element={<About />} />
      <Route path="/xeber" element={<Xeber />} />
      <Route path="/xeber:id" element={<Xebersingle />} />
    </Routes>
  );
};
export default Routing;
