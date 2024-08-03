import React, { useEffect } from 'react';

const PageWrapper = ({ children }) => {
  useEffect(() => {
    // Animatsiyali scroll qilish funksiyasi
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll qilishni yumshoqroq qilish
    });
  }, []);

  return <>{children}</>;
};

export default PageWrapper;
