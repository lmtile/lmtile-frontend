import React, { useState } from "react";
import AvailableSchedule from "./AvailableSchedule";
import ScheduleCalender from "./ScheduleCalender";
import offerImg from "../../../assets/img/home page/MicrosoftTeams-image-(4).png";
import Discover from "../Discover/Discover";
import TopItems from "../TopItems/TopItems";
import img1 from "../../../assets/img/schedule/image+1.jpg";
import img2 from "../../../assets/img/schedule/image+2.jpg";
import img3 from "../../../assets/img/schedule/image+3.jpg";
import ShopHundreds from "../ShopHundreds/ShopHundreds";
import OffersModal from "../Offers/OffersModal";
import moment from "moment";
import FlooringForBusiness from "../FlooringForBusiness/FlooringForBusiness";
import { DATE_TIME_HELPER } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { useEffect } from "react";
import OfferAndAppointment from "../OfferAndAppointment/OfferAndAppointment";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);

  const [slotDate, setSlotDate] = useState(
    moment(new Date()).format(DATE_TIME_HELPER.DATE_FORMAT)
  );

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/api/appointment/get-available-slot?date=${slotDate}`)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          setSlots(res.data.slots);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);

        message.error("Something Went Wrong!!!");
      });
  }, slotDate);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div>
        <OffersModal />
        <div className="lg:flex md:flex justify-center">
          <ScheduleCalender
            selectedDate={selectedDate}
            setSelectedDate={(e) => {
              setSlotDate(moment(e).format(DATE_TIME_HELPER.DATE_FORMAT));
              setSelectedDate(e);
            }}
          />
          <AvailableSchedule
            selectedDate={slotDate}
            slots={slots}
            setLoading={setLoading}
          />
        </div>

        {/* offer section */}
        <OfferAndAppointment></OfferAndAppointment>

        {/* discover section */}
        <Discover />

        {/* top item */}
        <TopItems />

        {/* branding section */}
        <div className="text-center">
          <div className="hero bg-base-300 lg:py-20">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img1}
                className=" shadow-black shadow-2xl w-2/4"
                alt=""
              />
              <div>
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
                  TOP QUALITY,NAME-BRAND FLOORING
                </h1>
                <p className="py-6">
                  At LM Tile we pride ourselves on providing the highest quality products to our valued customers. When it comes to flooring, we exclusively use top-of-the-line, name brand options. We understand that the floor is a crucial element in any space, and we believe in delivering nothing short of excellence. By utilizing these renowned brands, we ensure that our customers receive durable, stylish, and long-lasting flooring solutions that not only enhance the aesthetics of their homes but also stand the test of time. With our commitment to using top quality name brand flooring, we guarantee customer satisfaction and a result that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="hero  bg-base-300 lg:py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={img2}
                className="shadow-black shadow-2xl w-2/4"
                alt=""
              />
              <div>
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
                  LATEST STYLES AND COLORS
                </h1>
                <p className="py-6">
                  LM Tile  stays ahead of the trends to offer our customers the latest styles and colors in our product selection. We understand that aesthetics play a crucial role in transforming a space, and that's why we constantly update our inventory to include the most fashionable and contemporary options available.
                </p>
              </div>
            </div>
          </div>
          <div className="hero bg-base-300 lg:py-20">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img3}
                className=" shadow-black shadow-2xl w-2/4"
                alt=""
              />
              <div>
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
                  DURABLE AND LONG LASTING
                </h1>
                <p className="py-6">
                  LM tile  prioritizes durability and longevity in our product offerings. We understand that investing in remodeling projects is a significant decision, and our goal is to provide our customers with products that will stand the test of time. That's why we source materials that are known for their exceptional durability, ensuring that they can withstand daily wear and tear without compromising on quality or aesthetics. Whether it's flooring, countertops, cabinets, or any other remodeling element, our products are built to last. We believe in delivering not only immediate satisfaction but also long-term value, providing our customers with the peace of mind that their investment will continue to serve them for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* financing section */}
        <ShopHundreds />
        {/* low price guarantee */}
        <FlooringForBusiness />
      </div>
    </LoadingOverlay>
  );
};

export default Schedule;
