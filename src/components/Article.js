import React from "react";

function Article({ title, date, preview, minutes }) {
  const calculateReadTime = () => {
    const cups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    if (minutes < 30) {
      return `☕️`.repeat(cups) + ` ${minutes} min read`;
    } else {
      return `🍱`.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{calculateReadTime()}</p>
    </article>
  );
}

export default Article;