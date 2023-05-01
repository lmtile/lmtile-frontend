import React from 'react';

const EditOfferModal = () => {
    return (
        <div>
            <div className='w-[700px]'>
                <form action="">
                    <h1 className='text-4xl text-center my-10'>Add offer modal</h1>
                    <div>
                        <p className='text-lg font-bold'>Modal title*</p>
                        <input type="text" className='input input-bordered' placeholder='modal title' />
                    </div>
                    <div>
                        <p className='text-lg font-bold'>Description*</p>
                        <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>
                    <button className="btn btn-primary w-full" type="submit">
                        ADD OFFER MODAL
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditOfferModal;