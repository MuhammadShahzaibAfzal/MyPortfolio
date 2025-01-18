"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import AboutMe from "@/components/home/about-me";
import Header from "@/components/home/header";
import Services from "@/components/home/services";
import Skills from "@/components/home/skills";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <AboutMe />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};
export default HomePage;
