import { useState } from "react";

const images = ["plane.jpg", "plane2.avif", "plane3.png"];

export function AircraftImage() {
  const [image] = useState(() => images[Math.floor(Math.random() * images.length)]);

  return (
    <img
      className="record-image"
      src={`${import.meta.env.BASE_URL}${image}`}
      alt="Aircraft placeholder"
      loading="lazy"
      width={275}
      height={183}
    />
  );
}
