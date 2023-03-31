
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';


const AddPosterOffer = () => {
    // treatment is just another name of appointmentOptions with name, slots, _id

    const initialValues = { };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);


        // axios.post('/add-offer-poster', formValues)
        //     .then((response) => {
        //         console.log('Poster created:', response.data);
        //     })
        //     .catch((error) => {
        //         console.error('Error creating poster:', error);
        //     });

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.poster_title) {
            errors.poster_title = "poster_title is required!";
        }
        if (!values.Offer1) {
            errors.Offer1 = "Offer1 % is required!";
        }
        if (!values.Offer1_about) {
            errors.Offer1_about = "Offer1_about is required!";
        }
        if (!values.Offer2) {
            errors.Offer2 = "Offer2 % is required!";
        }
        if (!values.Offer2_about) {
            errors.Offer2_about = "Offer2_about is required!";
        }
        if (!values.Offer3) {
            errors.Offer3 = "Offer3 % is required!";
        }
        if (!values.Offer3_about) {
            errors.Offer3_about = "Offer3_about is required!";
        }

        return errors;
    };

    return (
        <div className=' w-[800px] p-7 mx-auto'>
            <h2 className="text-4xl">Add Poster </h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>

                <p className='font-bold ml-2'>Poster Title</p>
                <input name="poster_title" type="text" placeholder="Poster Title" className="input w-[660px] input-bordered " value={formValues.poster_title} onChange={handleChange} />
                <p className='text-red-800'>{formErrors.poster_title}</p>

                <div className='flex'>
                    <div>
                        <p className='font-bold ml-2'>Offer-1 %</p>
                        <input name="Offer1" type="text" placeholder="Offer-1 %" className="input w-80 input-bordered" value={formValues.Offer1} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer1}</p>
                    </div>
                    <div className='ml-5'>
                        <p className='font-bold ml-2'>Offer-1 About</p>
                        <input name="Offer1_about" type="text" placeholder="Offer-1 About" className="input w-80 input-bordered" value={formValues.Offer1_about} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer1_about}</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <p className='font-bold ml-2'>Offer-2 %</p>
                        <input name="Offer2" type="text" placeholder="Offer-2 %" className="input w-80 input-bordered" value={formValues.Offer2} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer2}</p>
                    </div>
                    <div className='ml-5'>
                        <p className='font-bold ml-2'>Offer-2 About</p>
                        <input name="Offer2_about" type="text" placeholder="Offer-2 About" className="input w-80 input-bordered" value={formValues.Offer2_about} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer2_about}</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <p className='font-bold ml-2'>Offer-3 %</p>
                        <input name="Offer3" type="text" placeholder="Offer-3 %" className="input w-80 input-bordered" value={formValues.Offer3} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer3}</p>
                    </div>

                    <div className='ml-5'>
                        <p className='font-bold ml-2'>Offer-3 About</p>
                        <input name="Offer3_about" type="text" placeholder="Offer-3 About" className="input w-80 input-bordered" value={formValues.Offer3_about} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.Offer3_about}</p>
                    </div>
               </div>

                <br />
                <input className='btn btn-primary w-[660px]' type="submit" value="ADD POSTER" />
            </form>
        </div>
    );
};

export default AddPosterOffer;