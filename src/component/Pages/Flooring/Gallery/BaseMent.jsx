import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import image1 from '../../../../assets/img/Gallery/BaseMent/9d32ff48-a42e-4818-9112-581af5b1bb7d.jpg'
import image2 from '../../../../assets/img/Gallery/BaseMent/basement-2.jpg'
import image3 from '../../../../assets/img/Gallery/BaseMent/basement-flooring-dec162019-min.jpg'
import image4 from '../../../../assets/img/Gallery/BaseMent/basement-with-stone-like-linoleum-flooring.jpg'
import image5 from '../../../../assets/img/Gallery/BaseMent/interior-coating-systems.jpg'
import image6 from '../../../../assets/img/Gallery/BaseMent/Lower-level-basement-1024x683.jpg'
import image7 from '../../../../assets/img/Gallery/BaseMent/modern-basement-living-room-with-small-kitchen-porcelain-tile-floor-and-white-furniture-with-fireplace.jpg'
import image8 from '../../../../assets/img/Gallery/BaseMent/tile_floor_basement.jpeg'
import image9 from '../../../../assets/img/Gallery/BaseMent/finished-basement-carpet-the-carpet-guys-img_4b6186a5043dbf8b_9-4436-1-f22a133.jpg'
import OffersModal from '../../Offers/OffersModal';





export default function BaseMent() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            <OffersModal></OffersModal>
            <h1 className='text-4xl font-bold mt-10 mb-20 text-center'>Basement Flooring</h1>
            <div className='grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 gap-x-5 mb-10 lg:mx-20 mx-10'>
                {images.map((src, index) => (
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width="auto"
                        key={index}
                        style={{ margin: '2px' }}
                        alt=""
                        className='shadow-2xl shadow-black hover:shadow-xl'
                    />
                ))}

                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)"
                        }}
                    />
                )}
            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn btn-primary rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
}

