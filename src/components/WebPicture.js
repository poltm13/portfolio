import React from "react";

export default function WebPicture(props) {
  return (
    <picture>
      <source srcSet={props.srcWebp} type="image/webp" />
      <img src={props.src} alt=" " id={props.id} className={props.className} />
    </picture>
  );
}
