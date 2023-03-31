import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import image1 from '../../../../assets/img/Gallery/DiningRoom/FudjvcYiRkaPrkSVuuqH.jpeg'
import image2 from '../../../../assets/img/Gallery/DiningRoom/ixsK1CBGRCqR2qdwtElF.jpeg'
import image3 from '../../../../assets/img/Gallery/DiningRoom/jvyk0lKRhesw4QxESGAs.jpeg'
import image4 from '../../../../assets/img/Gallery/DiningRoom/q2pOVbl5Q72nfcSXWJeL.jpeg'
import OffersModal from '../../Offers/OffersModal';





export default function DiningRoom() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        image1,
        image2,
        image3,
        image4,
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
            <h1 className='text-4xl font-bold mt-10 mb-20 text-center'>Dining Room Flooring</h1>
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

