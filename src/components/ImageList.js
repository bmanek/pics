import React from 'react'

const ImageList = (props) => {
  console.log(props.images)
  const pictures = props.images.map( (image) => {
    return <img alt={image.alt_description} src={image.urls.regular} />
  })
  return <div>{pictures}</div>
}

export default ImageList
