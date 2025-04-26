import React, { useEffect, useState } from "react";

const CatGallery = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error("Error fetching cat data:", err));
  }, []);

  return (
    <div >
      <h2 >🐱 Cat Gallery</h2>
      <div >
        {cats.map((cat, index) => (
          <div key={index} >
            <img
              src={cat.url}
              alt={`Cat ${index + 1}`}
            
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery;
