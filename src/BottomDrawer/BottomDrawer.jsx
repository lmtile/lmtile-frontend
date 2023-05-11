import React from 'react';
import { FaArrowAltCircleRight, FaCamera } from 'react-icons/fa';
import snap from '../assets/img/Gallery/How-to-video.gif'


const BottomDrawer = () => {
    return (
        <div>
            <div className="collapse collapse-arrow lg:w-[800px] mx-auto fixed inset-x-0 bottom-0 z-50 bg-white">
                <input type="checkbox" />
                <div className="collapse-title flex text-white bg-blue-800 shadow-2xl pl-20 border border-white"><FaCamera className=' mr-3 text-2xl' /><span className='text-xl font-bold'> SEE A FLOOR IN YOUR ROOM</span></div>
                <div className="collapse-content">
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 '>
                        <div className='mt-10 ml-8'>
                            <h3 className=' text-gray-500'>Wondering how new floors will look in your home? Try on floors in your exact room.</h3>
                            <div className='mt-16'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>1</span>
                                <span className='text-lg font-bold ml-5'>Snap a Pic</span>
                                
                            </div>
                            <div className='mt-10'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>2</span>
                                <span className='text-lg font-bold ml-5'>Choose a Floor</span>
                                
                            </div>
                            <div className='mt-10'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>3</span>
                                <span className='text-lg font-bold ml-5'>See it in Your Room</span>
                                
                            </div>
                            <div>
                                <a href="https://www.roomvo.com/my/mellifluousraindrop34e39fnetlifyapp/catalog/list?visitor_id=888b218b66774ac0bfacec16bbed1a36&amp;tracking_code=&amp;locale=en-us&amp;prefilter=%7B%22brands%22%3A%5B%5D%7D&amp;is_dealer=1&amp;iframe_id=ffPopup&amp;originator=&amp;use_host_navigation=1&amp;vendor_code=&amp;product_type=1&amp;domain=mellifluous-raindrop-34e39f.netlify.app&amp;is_in_top_window=0&amp;use_history_padding=0" data-opener-vendor-url-path="mellifluousraindrop34e39fnetlifyapp"><button className='btn rounded-none bg-red-800 mt-10 lg:ml-20 md:ml-20 font-bold'>FIND A FLOOR<FaArrowAltCircleRight className='text-xl ml-3' /></button></a>
                            </div>
                        </div>
                        <div className='md:mt-10 lg:mt-10'>
                            <img src={snap} alt="" className='w-80 lg:w-full md:w-full'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BottomDrawer;

<iframe id="ffPopup" allow="clipboard-write" title="Roomvo Visualizer, Powered by Roomvo" aria-label="Roomvo Visualizer, Powered by Roomvo" tabindex="-1" class="roomvo-popup--show" aria-hidden="false" src="https://www.roomvo.com/my/mellifluousraindrop34e39fnetlifyapp/catalog/list?visitor_id=888b218b66774ac0bfacec16bbed1a36&amp;tracking_code=&amp;locale=en-us&amp;prefilter=%7B%22brands%22%3A%5B%5D%7D&amp;is_dealer=1&amp;iframe_id=ffPopup&amp;originator=&amp;use_host_navigation=1&amp;vendor_code=&amp;product_type=1&amp;domain=mellifluous-raindrop-34e39f.netlify.app&amp;is_in_top_window=0&amp;use_history_padding=0" data-opener-vendor-url-path="mellifluousraindrop34e39fnetlifyapp" style="animation: 0s ease 0s 1 normal none running none !important; backface-visibility: visible !important; background-image: none !important; background-position: 0px 0px !important; background-size: auto !important; background-repeat: repeat !important; background-attachment: scroll !important; background-origin: padding-box !important; background-clip: border-box !important; border: none !important; border-radius: 0px !important; border-collapse: separate !important; border-spacing: 0px !important; inset: 0px auto auto 0px !important; box-sizing: content-box !important; caption-side: top !important; clear: none !important; clip: auto !important; color: inherit !important; columns: auto !important; column-fill: balance !important; column-gap: normal !important; column-rule: medium none currentcolor !important; content: normal !important; counter-increment: none !important; counter-reset: none !important; cursor: auto !important; direction: ltr !important; display: block; empty-cells: show !important; float: none !important; font-family: inherit !important; font-size: medium !important; font-style: normal !important; font-variant: normal !important; font-weight: normal !important; height: 100%; hyphens: none !important; letter-spacing: normal !important; line-height: normal !important; list-style: outside none disc !important; margin: 0px !important; max-height: none !important; max-width: none !important; min-height: 0px !important; min-width: 0px !important; opacity: 1 !important; outline: none medium !important; overflow: visible !important; padding: 0px !important; break-after: auto !important; break-before: auto !important; break-inside: auto !important; perspective: none !important; perspective-origin: 50% 50% !important; position: fixed !important; tab-size: 8 !important; table-layout: auto !important; text-align: inherit !important; text-align-last: auto !important; text-decoration-line: none !important; text-decoration-thickness: initial !important; text-decoration-style: solid !important; text-decoration-color: inherit !important; text-indent: 0px !important; text-shadow: none !important; text-transform: none !important; transform-style: flat !important; unicode-bidi: normal !important; vertical-align: baseline !important; visibility: visible !important; white-space: normal !important; width: 100%; word-spacing: normal !important; z-index: 2147483647 !important;" data-previous-body-style-overflow="visible"></iframe> 
