import React from 'react'
import './ImageList.css'

const ImageList = (props) => {
  console.log(props.images)
  const pictures = props.images.map( ({id, alt_description, urls}) => {
    return <img key={id} alt={alt_description} src={urls.regular} />
  })
  return <div className="image-list">{pictures}</div>
}

export default ImageList


// destructuring: ln 4-5 was
// const pictures = props.images.map( (image) => {
//   return <img key={image.id} alt={image.alt_description} src={image.urls.regular} />
