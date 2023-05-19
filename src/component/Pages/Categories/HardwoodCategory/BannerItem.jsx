import React from "react";

const BannerItem = ({ products }) => {
    const { picture} = products;
    return (
        <>
            <div className="first_slide">
                <div className="slide-img">
                    <img src={picture} alt="img" className='w-full' />
                </div>
            </div>
        </>
    );
};

export default BannerItem;