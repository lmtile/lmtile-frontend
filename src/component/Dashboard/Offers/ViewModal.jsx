import React from 'react';
import { Link } from 'react-router-dom';

const ViewModal = () => {
    return (
        <div>
            <div className='mx-auto mt-10 w-96'>
                <h1 className='text-3xl font-bold my-5'></h1>
                <p className='mb-10'></p>
                <div className="mt-10">
                    <Link
                        className="btn btn-outline mr-5 rounded-none"
                    >
                        Edit
                    </Link>
                    <button
                        
                        className="btn btn-outline rounded-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;