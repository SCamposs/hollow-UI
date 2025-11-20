"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface BackToTopButtonProps {
  offsetRight?: string;
  offsetBottom?: string;
}

export function BackToTopButton({
  offsetRight = "right-4",
  offsetBottom = "bottom-22",
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${offsetBottom} ${offsetRight} z-50 bg-white dark:bg-gray-900 rounded-full shadow-lg w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition hover:bg-gray-50 dark:hover:bg-gray-800`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp className="w-6 h-6 text-gray-700 dark:text-gray-300" />
    </button>
  );
}
