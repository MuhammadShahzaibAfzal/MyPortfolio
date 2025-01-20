"use client";
// import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import AboutMe from "@/components/home/about-me";
import Header from "@/components/home/header";
import Services from "@/components/home/services";
import Skills from "@/components/home/skills";
import { useEffect, useState } from "react";
import Contact from "../../components/home/contact";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to true

  useEffect(() => {
    // Get saved theme from localStorage after the component mounts
    if (typeof window !== "undefined") {
      const savedDarkMode = window.localStorage.getItem("darkMode");
      if (savedDarkMode !== null) {
        setIsDarkMode(JSON.parse(savedDarkMode)); // Update state with saved preference
      }
    }
  }, []);

  useEffect(() => {
    // Update the theme based on isDarkMode
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme preference to localStorage
    if (typeof window !== "undefined") {
      window.localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <AboutMe isDarkMode={isDarkMode} />
      <Skills />
      <Services />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
