/* eslint-disable react/prop-types */
export default function ImageC({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'http://localhost:4000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }