import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import image1 from '../../../../assets/img/Gallery/LivingRoom/dnSMdwFRR9qxnfMQtGmj.jpeg'
import image2 from '../../../../assets/img/Gallery/LivingRoom/JortDJYRQ3upAiqZ6UGS.jpeg'
import image3 from '../../../../assets/img/Gallery/LivingRoom/mClX4i3QcSGtzpr6ExXF.jpeg'
import image4 from '../../../../assets/img/Gallery/LivingRoom/mwtXBSqRRZ2vsuqWjua6.jpeg'
import image5 from '../../../../assets/img/Gallery/LivingRoom/nLNADvOSbilmZpGOSjZb.jpeg'
import image6 from '../../../../assets/img/Gallery/LivingRoom/oTRb9vZQR8WEkzCCLNnU.jpeg'
import image7 from '../../../../assets/img/Gallery/LivingRoom/Pg3NTb6JRCuiuULvnSUr.jpeg'
import image8 from '../../../../assets/img/Gallery/LivingRoom/qKnNs4cjSeWkf4ZGG135.jpeg'
import image9 from '../../../../assets/img/Gallery/LivingRoom/tfB8p5zzQOaVoDCx9eeb.jpeg'
import image10 from '../../../../assets/img/Gallery/LivingRoom/TM47fu4eR3MVkbBx3yrJ.jpeg'
import image11 from '../../../../assets/img/Gallery/LivingRoom/U8SemFEVTJrreVAcCE2x.jpeg'
import image12 from '../../../../assets/img/Gallery/LivingRoom/XEW2kVQRWr4nY4PytaUw.jpeg'
import image13 from '../../../../assets/img/Gallery/LivingRoom/XWVlKkh7ThaJ34onjr78.jpeg'
import OffersModal from '../../Offers/OffersModal';





export default function LivingRoom() {
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
        image10,
        image11,
        image12,
        image13 
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
            <h1 className='text-4xl font-bold mt-10 mb-20 text-center'>Living/Family Room Flooring</h1>
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

