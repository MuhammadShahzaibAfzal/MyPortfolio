"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import AboutMe from "@/components/home/about-me";
import Header from "@/components/home/header";
import Services from "@/components/home/services";
import Skills from "@/components/home/skills";
import { useEffect, useState } from "react";

const HomePage = () => {
  const savedDarkMode =
    typeof window !== "undefined" && window.localStorage.getItem("darkMode");
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(
    savedDarkMode ? JSON.parse(savedDarkMode) : prefersDarkMode
  );

  useEffect(() => {
    if (isDarkMode) {
      if (typeof window !== "undefined") {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("dark");
      }
    }

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
      <Footer />
    </div>
  );
};
export default HomePage;
