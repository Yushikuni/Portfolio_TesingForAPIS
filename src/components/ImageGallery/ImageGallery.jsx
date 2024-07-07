import React from "react";
import Gallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

const ImageGallery = (props) => {
    const imageList = props?.images?.map((image) => {
        return{
            original: image,
            trumbnail: image,
        };
    });

    return(
        <div>
            <Gallery items={imageList} showThumbnails={false} />
        </div>
    );
};

export default ImageGallery;