import React from 'react';
import { Link } from 'react-router-dom';

const OfferProduct = () => {

    const offerProducts = [
        {
            id: "1",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "CARPET",
            amount: "$150 OFF",
            couponCode: "150C",
            expires: "04/09/2023"

        },
        {
            id: "2",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "LAMINATE",
            amount: "$150 OFF",
            couponCode: "150C",
            expires: "04/09/2023"

        },
        {
            id: "3",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "HARDWOOD",
            amount: "$150 OFF",
            couponCode: "150H",
            expires: "04/09/2023"
        },
        {
            id: "4",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "SPC",
            amount: "$150 OFF",
            couponCode: "150S",
            expires: "04/09/2023"

        },
        {
            id: "5",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "TILE",
            amount: "$150 OFF",
            couponCode: "150T",
            expires: "04/09/2023"

        },
        {
            id: "6",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "CABINET",
            amount: "$150 OFF",
            couponCode: "150CN",
            expires: "04/09/2023"
        },
        {
            id: "7",
            picture: "https://img.shawinc.com/s7/is/image/ShawIndustries/?src=ir(ShawIndustriesRender/20210203_BEDROOM_CARPET_SQUARE?res=20&src=is(ShawIndustriesRender/5E290_00101_MAIN))&fit=crop,0&qlt=60&wid=590&hei=590",
            offerType: "LIMITED TIME OFFER",
            name: "SINK",
            amount: "$150 OFF",
            couponCode: "150SK",
            expires: "04/09/2023"

        }

    ]
    return (
        <div className='bg-base-300 lg:p-20 p-10'>
            <h1 className='text-3xl my-10 text-center'><span className='font-bold'>OTHER COUPONS, PROMO CODES & DEALS</span></h1>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    offerProducts.map((product) =>
                        <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                            <figure><img src={product.picture} alt="car!" className='w-full h-96' /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl text-warning font-bold">{product.offerType}</h2>
                                <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                                <h2 className="card-title text-2xl font-bold">{product.amount}</h2>
                                <h2 className="card-title text-xl ">Coupon Code: {product.couponCode}</h2>
                                <h2 className="card-title">Expires: {product.expires}</h2>
                                <Link to={'/offerSchedule'}><button className='btn btn-outline rounded-none text-lg'>APPLY</button></Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default OfferProduct;