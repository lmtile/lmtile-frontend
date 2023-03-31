import { message } from 'antd';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from '../../../../config/axios';


const BookingModal = ({ appointment, setAppointment, selectedDate }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots, products } = appointment;
    const appoint_date = format(selectedDate, 'MM-dd-yyyy');

    const initialValues = { type: "", office_name: "", date: "", time: "", product_name: "", name: "", email: "", phone: "", city: "", address: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value, date: appoint_date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        axios
            .post("/api/appointment/book-appointment", formValues, {
                headers: {
                    token: localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                setIsSubmit();

                if (res.data.success) {
                    message.success(res.data.message);
                    setIsSubmit({
                        formData: {
                            type: "", office_name: "", date: "", time: "", product_name: "", name: "", email: "", phone: "", city: "", address: ""
                        },
                    });
                } else {
                    message.error(res.data.message);
                }
            })
            .catch((err) => {
                setIsSubmit();
                console.error(err);
                message.error("Something went wrong!!!");
            });

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.type) {
            errors.property_type = "property_type is required!";
        }
        if (!values.time) {
            errors.slot = "slot is required!";
        }
        if (!values.product_name) {
            errors.product = "product is required!";
        }
        if (!values.coupon_code) {
            errors.coupon_code = "coupon_code is required!";
        }
        if (!values.name) {
            errors.name = "name is required!";
        }
        if (!values.email) {
            errors.email = "email is required!";
        }
        if (!values.phone) {
            errors.phone = "phone is required!";
        }
        if (!values.city) {
            errors.city = "city is required!";
        }
        if (!values.address) {
            errors.street_address = "city is required!";
        }

        return errors;

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <p className='font-bold ml-2'>Property type</p>
                        <select name='type' className="select w-full input-bordered" value={formValues.property_type} onChange={handleChange} >
                            <option>Select an option</option>
                            <option>Home</option>
                            <option>Office</option>
                        </select>
                        <p className='text-red-800'>{formErrors.type}</p>
                        <p className='font-bold ml-2'>Office Name</p>
                        <input name='office_name' placeholder='if you select the office property please give the office name' type="text" className="input w-full input-bordered " />
                        <p className='font-bold ml-2'>Date</p>
                        <p name="date" className='input pt-2' disabled >{appoint_date}</p>
                        {/* <input name='date' type="text" disabled className="input w-full input-bordered " value={date} onChange={handleChange} /> */}
                        <p className='font-bold ml-2'>Time</p>
                        <select name="time" className="select select-bordered w-full" value={formValues.time} onChange={handleChange}>
                            <option>Select an option</option>
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <p className='font-bold ml-2'>Product</p>
                        <select name="product_name" className="select select-bordered w-full " value={formValues.product_name} onChange={handleChange}>
                            <option>Select an option</option>
                            {
                                products.map((product, i) => <option
                                    value={product}
                                    key={i}
                                >{product}</option>)
                            }
                        </select>
                        <p className='text-red-800'>{formErrors.product_name}</p>
                        <p className='font-bold ml-2'>Name</p>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" value={formValues.name} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.name}</p>

                        <p className='font-bold ml-2'>Email</p>
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" value={formValues.email} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.email}</p>

                        <p className='font-bold ml-2'>Phone</p>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" value={formValues.phone} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.phone}</p>

                        <p className='font-bold ml-2'>City</p>
                        <input name="city" type="text" placeholder="City" className="input w-full input-bordered" value={formValues.city} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.city}</p>

                        <p className='font-bold ml-2'>Street Address</p>
                        <input name="address" type="text" placeholder="Street Address" className="input w-full input-bordered" value={formValues.address} onChange={handleChange} />
                        <p className='text-red-800'>{formErrors.address}</p>

                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;