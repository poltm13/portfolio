import React from 'react';

export default function WebPicture(props) {
  return (
    <picture className={props.className}>
      { props.srcWebp ? <source srcSet={props.srcWebp} type="image/webp"/> : ''}
      <source srcSet={props.src} type={'image/' + props.srcType} />
      <img src={props.src} alt=" " id={props.id} onClick={props.onClick} />
    </picture>
  );
}
