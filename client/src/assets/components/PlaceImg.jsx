/* eslint-disable react/prop-types */
import ImageC from "./ImageC.jsx";

export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <ImageC className={className} src={place.photos[index]} alt=""/>
  );
}