import React from "react";

const BannerItem = ({ products }) => {
    const { picture} = products;
    return (
        <>
            <div className="first_slide">
                <div className="slide-img">
                    <img className='slider_img h-2/4' src={picture} alt="img" />
                </div>
            </div>
        </>
    );
};

export default BannerItem;