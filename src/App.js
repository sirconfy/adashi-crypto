import "./App.css";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import BuyToken from "./components/BuyToken";
import AuditsKyc from "./components/AuditsKyc";
import { useEffect } from "react";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";



function App() {
 

  // const googleTranslateElementInit = () => {
  //   if (!window.google.translate.TranslateElement) {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: 'en',
  //         includedLanguages: 'en,ko,ja,zh-CN',
  //         autoDisplay: false,
  //         multilanguagePage: false,
  //         // gaTrack: true,
  //         // gaId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
  //       },
  //       'google_translate_element'
  //     );
  //   }
  // };
  
  // useEffect(() => {
  //   // Check if the translation script is already loaded
  //   if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) {
  //     const addScript = document.createElement('script');
  //     addScript.setAttribute(
  //       'src',
  //       '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //     );
  //     document.body.appendChild(addScript);
  //     window.googleTranslateElementInit = googleTranslateElementInit;
  //   } else {
  //     googleTranslateElementInit();
  //   }

  //   const secondSelect = document.querySelector('.goog-te-combo');
  //   if (secondSelect) {
  //     secondSelect.style.display = 'none';
  //   }


  // }, []);

 


  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Layout  />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/buy-token" element={ <BuyToken/>} />
        <Route path="/audits-kyc" element={ <AuditsKyc/>} />        
       
      </Routes>
  
    </div>
  );
}

export default App;
