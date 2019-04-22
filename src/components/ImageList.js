import React from 'react';

const ImageList = (props) => {
    const images = props.images.map( image => {
        return <img className="ui Big rounded image" src={image.urls.regular}/>
    });

    return <div>{images}</div>
}

export default ImageList;