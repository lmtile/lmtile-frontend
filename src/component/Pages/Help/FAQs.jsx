import React from 'react';
import { Link } from 'react-router-dom';
import OffersModal from '../Offers/OffersModal';

const FAQs = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <h1 className='text-5xl font-bold my-10 text-center'>FREQUENTLY ASKED QUESTIONS</h1>
            <p className='text-xl text-gray-500 text-center mb-10'>Find answers to your questions below. For any additional questions, call us at <u className='text-red-800 font-bold'>281-861-6970</u></p>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center mb-14'> GENERAL</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile® have any showrooms or retail stores?
                    </div>
                    <div className="collapse-content">
                       Yes We Have Showroom in Farm to Market Rd 529, Houston, TX 77095. 
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How do I shop with LM-Tile®? Is there any charge or obligation for an estimate?
                    </div>
                    <div className="collapse-content">
                        We offer a convenient, in-home shopping service at no additional cost to you. We bring hundreds of samples directly to your home or business so you can see how they will look with your lighting and décor. There is no charge or obligation for our FREE In-Home Estimate or Shop-at-Home service.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile carry brand name products?
                    </div>
                    <div className="collapse-content">
                        LM-Tile offers a wide selection of quality products, from the best brands in the world. 
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Do the products carry a warranty?
                    </div>
                    <div className="collapse-content">
                        Yes. All of the products carry both a manufacturer’s product warranty and a limited Installation Warranty.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile sell products separately from installation?
                    </div>
                    <div className="collapse-content">
                        LM-Tile is a full-service flooring company therefore we do not sell products separate from installation.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile install products purchased from another flooring company?
                    </div>
                    <div className="collapse-content">
                        LM-Tile is a full-service flooring company therefore we do not install floors purchased elsewhere.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile offer a service plan?
                    </div>
                    <div className="collapse-content">
                        Yes, LM-Tile has a Service Plan that covers damage above and beyond warranties.
                    </div>
                </div>
            </div>

            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>SHOP-AT-HOME APPOINTMENT</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How can I schedule an appointment?
                    </div>
                    <div className="collapse-content">
                        You can schedule a FREE at-home estimate online or by calling <u className='text-red-800 font-bold'>281-861-6970</u>. Appointments are generally available between 9 a.m. and 9 p.m. on weekdays and between 9 a.m. and 3 p.m. on Saturdays.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How do I reschedule my appointment?
                    </div>
                    <div className="collapse-content">
                        Please contact <u className='text-red-800 font-bold'>281-861-6970</u> and a representative will be available to assist you. It is important that you do not set up another appointment online without canceling your previous one.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        I noticed my appointment is for a two-hour window. When can I expect the flooring professional to arrive?
                    </div>
                    <div className="collapse-content">
                        The flooring professional will arrive any time within the two-hour window that you selected.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Do I need to call to confirm my appointment?
                    </div>
                    <div className="collapse-content">
                        No. It is not necessary to call and confirm your appointment. You will receive an email confirmation with your appointment date and time as confirmation.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Why must all parties making the decision be present for the entire appointment?
                    </div>
                    <div className="collapse-content">
                        Since we cannot leave samples at your home, we ask that anyone who will be part of the purchase decision be present during the appointment.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Is there a product minimum or limit on purchases?
                    </div>
                    <div className="collapse-content">
                        No, there is no minimum or limit for purchases.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        What information will LM-Tile need to place my order?
                    </div>
                    <div className="collapse-content">
                        Your order can be placed by your flooring professional during your FREE In-Home Estimate. We will need your current, state-issued identification and the required deposit. Valid forms of payment include cashier's checks, money orders, certified checks or bank cards. Renters must have an “Authorization Letter” from the property owner allowing Empire to perform work on the premises.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can I purchase from LM-Tile if I rent my apartment or home?
                    </div>
                    <div className="collapse-content">
                        Yes. You can buy Empire products if you are a renter. We’ll require an “Authorization Letter” from the property owner allowing Empire to perform work on the premises. Please contact <u className='text-red-800 font-bold'>281-861-6970</u> and a Customer Service Representative will explain in more detail what you need to do.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        What types of payments does LM-Tile accept?
                    </div>
                    <div className="collapse-content">
                        Payments must be available prior to the start of installation. We accept Visa, MasterCard, American Express, Discover, money orders, cashier's checks, and/or personal checks. Check Acceptance Policy: When you provide a check as payment, you authorize us to either use information from your check to make a one-time electronic fund transfer from your account or to process the payment as a check transaction. Some states have exceptions for collecting before installation.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>FINANCING</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        What types of financing options do you have?
                    </div>
                    <div className="collapse-content">
                        <Link to={'/financing'}><u className='text-red-800'>Click here</u></Link> to learn about our available financing.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can I apply for financing prior to my FREE In-Home Estimate?
                    </div>
                    <div className="collapse-content">
                        Unfortunately, we cannot provide pre-approved financing prior to your appointment, but you can conveniently apply during your FREE In-Home Estimate.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How can I contact Wells Fargo Bank, N.A. regarding my account?
                    </div>
                    <div className="collapse-content">
                        Please call <u className='text-red-800 font-bold'>281-861-6970</u> with any questions regarding an existing Wells Fargo Bank, N.A. account.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How can I contact Synchrony regarding my account?
                    </div>
                    <div className="collapse-content">
                        Please call <u className='text-red-800 font-bold'>281-861-6970</u> with any questions regarding an existing Synchrony account.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>INSTALLATION</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How quickly can you install?
                    </div>
                    <div className="collapse-content">
                        We are able to professionally install in-stock products when you want – as soon as Next Day. Because we have large warehouses with products ready to be installed, we can work around your schedule and help make updating your home easy and convenient.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        When will my installer arrive at my home?
                    </div>
                    <div className="collapse-content">
                        Installations appointments occur between 8 a.m. and 6 p.m. You will receive an ETA call on the morning of your appointment to provide an estimated window for arrival. Unfortunately, a specific time of arrival cannot be provided.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Will my old flooring have to be removed?
                    </div>
                    <div className="collapse-content">
                        Depending on the project, your existing flooring may have to be removed, or we may be able to accommodate a new installation over your old floor. Your flooring professional will be able to provide more information on your options during your FREE In-Home Estimate.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>CARPET</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How quickly can installation begin for my Carpet?
                    </div>
                    <div className="collapse-content">
                        We are able to professionally install in-stock carpet when you want – as soon as Next Day. Because we have large warehouses with carpet ready to be installed, we can work around your schedule and help make updating your home easy and convenient.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile® offer brand name carpet?
                    </div>
                    <div className="collapse-content">
                        LM-Tile® offers a wide selection of quality carpet, from the best brands in the world.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        What type of carpet is best for my home?
                    </div>
                    <div className="collapse-content">
                        Your flooring professional will help you choose the right carpet for your lifestyle, needs, and budget during your FREE In-Home Estimate.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        What type of padding is best for my home?
                    </div>
                    <div className="collapse-content">
                        Your flooring professional will recommend the padding that is best for your needs during your FREE In-Home Estimate.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does my carpet come with a warranty?
                    </div>
                    <div className="collapse-content">
                        Yes. All of our products carry both a manufacturer’s product warranty and a limited Installation Warranty.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Why is my carpet shedding?
                    </div>
                    <div className="collapse-content">
                        It is not uncommon for some new carpet to shed for up to 120 days. The main reason for carpet shedding is due to cut fiber left from the milling process. It is recommended that the carpet be vacuumed frequently to minimize the shedding.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>HARDWOOD FLOORING</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile® carry hardwood flooring?
                    </div>
                    <div className="collapse-content">
                        We offer a wide variety of solid and engineered hardwood flooring. During your FREE In-Home Estimate, a flooring professional will show you all the options and help you pick the best hardwood flooring for your lifestyle, needs, and budget.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How quickly can installation begin for my hardwood flooring?
                    </div>
                    <div className="collapse-content">
                        We are able to professionally install in-stock hardwood flooring when you want – as soon as Next Day. Because we have large warehouses with hardwood flooring ready to be installed, we can work around your schedule and help make updating your home easy and convenient.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile® install transitions and moldings?
                    </div>
                    <div className="collapse-content">
                        All hardwood flooring installations are professionally finished with fashionable coordinating moldings and transitions when applicable.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can my hardwood flooring from LM-Tile be refinished?
                    </div>
                    <div className="collapse-content">
                        Hardwood flooring is designed for long-term durability, but it may eventually require refinishing. A traditional refinish involves stripping the floor and re-applying or changing the stain color. All Empire hardwood flooring allows for “screen and recoats.” This is similar to a refinish but much less disruptive. It allows the finish to be restored without the mess of sanding and buffing.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile refinish hardwood floors?
                    </div>
                    <div className="collapse-content">
                        Unfortunately, we do not provide this service.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>LAMINATE FLOORING</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can LM-Tile® install laminate flooring in every room of my home?
                    </div>
                    <div className="collapse-content">
                        Yes, laminate flooring can be installed anywhere in your home. Some of our laminate floors are specifically designed for moisture-prone areas such as bathrooms, kitchens, and laundry rooms. During your FREE In-Home Estimate, a flooring professional will show you all the options and help you pick the best laminate for your lifestyle, needs, and budget.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can you install laminate flooring on my stairs?
                    </div>
                    <div className="collapse-content">
                        Many of our laminate styles can be installed on stairs.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How is laminate flooring installed?
                    </div>
                    <div className="collapse-content">
                        Laminate flooring is installed using a state-of-the-art locking system, providing your floors years of solid performance.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How quickly can installation begin for laminate flooring?
                    </div>
                    <div className="collapse-content">
                        We are able to professionally install in-stock laminate flooring when you want – as soon as Next Day. Because we have large warehouses with laminate flooring ready to be installed, we can work around your schedule and help make updating your home easy and convenient.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can laminate flooring be installed over my existing floor?
                    </div>
                    <div className="collapse-content">
                        Depending on the project, your existing flooring may have to be removed, or we may be able to accommodate a new installation over your old floor. Your flooring professional will be able to provide more information on your options during your FREE In-Home Estimate.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Can a chip in my laminate floor be replaced?
                    </div>
                    <div className="collapse-content">
                        Laminate flooring is extremely durable. But no flooring is indestructible. If severe damage occurs, it may be possible to replace a single plank without replacing your entire floor.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How can I repair scratch marks and chips on laminate flooring?
                    </div>
                    <div className="collapse-content">
                        Approved laminate floor filler may correct minor damage, such as scratch marks and minor repairs. More serious damages may require replacing a plank.
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:w-[1024px]'>
                <h1 className='text-4xl font-bold text-red-800 text-center my-14'>LAMINATE FLOORING</h1>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        Does LM-Tile® carry tile flooring?
                    </div>
                    <div className="collapse-content">
                        We offer a wide variety of porcelain and ceramic tile flooring. During your FREE In-Home Estimate, a flooring professional will show you all the options and help you pick the best tile flooring for your lifestyle, needs, and budget.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-red-800 font-bold">
                        How quickly can installation begin for my tile flooring?
                    </div>
                    <div className="collapse-content">
                        We are able to professionally install in-stock tile flooring when you want – as soon as Next Day. Because we have large warehouses with tile flooring ready to be installed, we can work around your schedule and help make updating your home easy and convenient.
                    </div>
                </div>
            </div>

            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn bg-red-800 rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default FAQs;