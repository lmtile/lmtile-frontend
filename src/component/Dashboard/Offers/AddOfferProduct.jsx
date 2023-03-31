import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';



const AddOfferProduct = () => {
    // treatment is just another name of appointmentOptions with name, slots, _id

    const initialValues = {offer_title:"",product_name:"",offer_amount:"",coupon_code:"",expires:"",};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value, image:image });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);


    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.offer_title) {
            errors.offer_title = "offer_title is required!";
        }
        if (!values.product_name) {
            errors.product_name = "product_name is required!";
        }
        if (!values.offer_amount) {
            errors.offer_amount = "offer_amount is required!";
        }
        if (!values.coupon_code) {
            errors.coupon_code = "coupon_code is required!";
        }
        if (!values.expires) {
            errors.expires = "expires day/date is required!";
        }
        if (!values.image_upload) {
            errors.image_upload = "Image is required!";
        }
        
        return errors;
    };
        const [image, setImage] = useState(null);

        const handleFileChange = (e) => {
            setImage(e.target.files[0]);
        };
    return (
        <div className=' w-[800px] p-7 mx-auto'>
            <h2 className="text-4xl">Add Offer Product </h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>

                <p className='font-bold ml-2'>Offer Title</p>
                <input name="offer_title" type="text" placeholder="Offer title" className="input w-[700px] input-bordered " value={formValues.offer_title} onChange={handleChange} />
                <p className='text-red-800'>{formErrors.offer_title}</p>

                <div className='flex'>
                    <div>
                        <p className='font-bold ml-2'>Product Name</p>
                        <input name="product_name" type="text" placeholder="Product name" className="input w-80 input-bordered" value={formValues.product_name} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.product_name}</p>
                    </div>
                    <div className='ml-5'>
                        <p className='font-bold ml-2'>offer amount/percent</p>
                        <input name="offer_amount" type="text" placeholder="offer amount/percent" className="input w-80 input-bordered" value={formValues.offer_amount} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.offer_amount}</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <p className='font-bold ml-2'>Coupon Code</p>
                        <input name="coupon_code" type="text" placeholder="coupon code" className="input w-80 input-bordered" value={formValues.coupon_code} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.coupon_code}</p>
                    </div>
                    <div className='ml-5'>
                        <p className='font-bold ml-2'>Expires</p>
                        <input name="expires" type="text" placeholder="Expires" className="input w-80 input-bordered" value={formValues.expires} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.expires}</p>
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-sm text-gray-700">Upload Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            {image && (
                                <div>
                                    <img
                                        className="w-full h-64 object-cover rounded-md"
                                        src={URL.createObjectURL(image)}
                                        alt=""
                                    />
                                </div>
                            )}
                            <div className="flex items-center justify-center">
                                <label
                                    htmlFor="image-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        id="image_upload"
                                        name="image_upload"
                                        type="file"
                                        className="sr-only"
                                        value={formValues.image_upload}
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <input className='btn btn-primary w-full' type="submit" value="ADD OFFER PRODUCT" />
            </form>
        </div>
    );
};

export default AddOfferProduct;