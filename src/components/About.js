import React from "react";

function About({ imageSrc, aboutText }) {
  const defaultImageSrc = "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={imageSrc || defaultImageSrc} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;