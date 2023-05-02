import React, { useState } from "react";
import AvailableSchedule from "./AvailableSchedule";
import ScheduleCalender from "./ScheduleCalender";
import offerImg from "../../../../assets/img/home page/MicrosoftTeams-image-(4).png";
import Discover from "../../Discover/Discover";
import TopItems from "../../TopItems/TopItems";
import img1 from "../../../../assets/img/schedule/image+1.jpg";
import img2 from "../../../../assets/img/schedule/image+2.jpg";
import img3 from "../../../../assets/img/schedule/image+3.jpg";
import ShopHundreds from "../../ShopHundreds/ShopHundreds";
import OffersModal from "../../Offers/OffersModal";
import moment from "moment";
import FlooringForBusiness from "../../FlooringForBusiness/FlooringForBusiness";
import { DATE_TIME_HELPER } from "../../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../../config/axios";
import message from "../../../../config/message";
import { useEffect } from "react";
import OfferAndAppointment from "../../OfferAndAppointment/OfferAndAppointment";
import { useParams } from "react-router-dom";

const OfferSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);

  const [slotDate, setSlotDate] = useState(
    moment(new Date()).format(DATE_TIME_HELPER.DATE_FORMAT)
  );

  const coupon_code = useParams()?.coupon_code;

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
            coupon_code={coupon_code}
          />
        </div>

        {/* offer section */}
        <OfferAndAppointment />

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
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
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
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
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
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
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

export default OfferSchedule;
