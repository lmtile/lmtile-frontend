import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';


const AddPackage = () => {
    // treatment is just another name of appointmentOptions with name, slots, _id

    const initialValues = {};
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
        if (!values.package_month) {
            errors.package_month = "package_month is required!";
        }
        if (!values.package_title) {
            errors.package_title = "package_title is required!";
        }
        if (!values.description) {
            errors.description = "description is required!";
        }
        if (!values.bullet_point1) {
            errors.bullet_point1 = "bullet_point1 is required!";
        }
        if (!values.bullet_point2) {
            errors.bullet_point2 = "bullet_point2 is required!";
        }
        if (!values.bullet_point3) {
            errors.bullet_point3 = "bullet_point3 is required!";
        }
        if (!values.bullet_point4) {
            errors.bullet_point4 = "bullet_point4 is required!";
        }

        return errors;
    };

    return (
        <div className=' w-[800px] p-7 mx-auto'>
            <h2 className="text-4xl">Add Package </h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>

                <p className='font-bold ml-2'>Package Month</p>
                <input name="package_month" type="text" placeholder="Package Month" className="input w-full input-bordered " value={formValues.package_month} onChange={handleChange} />
                <p className='text-red-800'>{formErrors.package_month}</p>

                    <div>
                        <p className='font-bold '>Package Title</p>
                    <input name="package_title" type="text" placeholder="Package Title" className="input w-full input-bordered" value={formValues.package_title} onChange={handleChange} />
                    <p className='text-red-800'>{formErrors.package_title}</p>
                    </div>
                    <div className=''>
                        <p className='font-bold ml-2'>Description</p>
                    <input name="description" type="text" placeholder="description" className="input w-full input-bordered" value={formValues.description} onChange={handleChange} />
                    <p className='text-red-800'>{formErrors.description}</p>
                    </div>


                    <div>
                        <p className='font-bold'>Bullet point 1</p>
                    <input name="bullet_point1" type="text" placeholder="Bullet point 1" className="input w-full input-bordered" value={formValues.bullet_point1} onChange={handleChange} />
                    <p className='text-red-800'>{formErrors.bullet_point1}</p>
                    </div>
                    <div className=''>
                    <p className='font-bold'>Bullet point 2</p>
                    <input name="bullet_point2" type="text" placeholder="Bullet point 2" className="input w-full input-bordered" value={formValues.bullet_point2} onChange={handleChange} />
                    <p className='text-red-800'>{formErrors.bullet_point2}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Bullet point 3</p>
                        <input name="bullet_point3" type="text" placeholder="Bullet point 3" className="input w-full input-bordered" value={formValues.bullet_point3} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.bullet_point3}</p>
                    </div>

                    <div className=''>
                        <p className='font-bold'>Bullet point 4</p>
                        <input name="bullet_point4" type="text" placeholder="Bullet point 4" className="input w-full input-bordered" value={formValues.bullet_point4} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.bullet_point4}</p>
                    </div>

                <br />
                <input className='btn btn-primary w-full' type="submit" value="ADD PACKAGE" />
            </form>
        </div>
    );
};

export default AddPackage;