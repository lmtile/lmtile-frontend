import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../component/Dashboard/products/AllProducts";
import Appointment from "../../component/Dashboard/Appointment/Appointment";
import AddProduct from "../../component/Dashboard/products/AddProduct";
import DashboardHome from "../../component/Dashboard/DashboardHome/DashboardHome";
import AddOfferProduct from "../../component/Dashboard/Offers/AddOfferProduct";
import AddPosterOffer from "../../component/Dashboard/Offers/AddPosterOffer";
import AddPackage from "../../component/Dashboard/Package/AddPackage";
import Login from "../../component/Login/Login";
import CabinetCategory from "../../component/Pages/Categories/CabinetCategory/CabinetCategory";
import CarpetCategories from "../../component/Pages/Categories/CarpetCategories/CarpetCategories";
import ForBusiness from "../../component/Pages/Categories/ForBusniess/ForBusiness";
import Questions from "../../component/Pages/Categories/ForBusniess/Questions";
import HardwoodCategory from "../../component/Pages/Categories/HardwoodCategory/HardwoodCategory";
import Laminate from "../../component/Pages/Categories/Laminate/Laminate";
import SinkCategory from "../../component/Pages/Categories/SinkCategory/SinkCategory";
import SpcCategory from "../../component/Pages/Categories/SPCcategory/SpcCategory";
import TileCategory from "../../component/Pages/Categories/TileCategory/TileCategory";
import Financing from "../../component/Pages/Financing/Financing";
import FlooringByNeed from "../../component/Pages/Flooring/FlooringByNeed";
import FlooringByRoom from "../../component/Pages/Flooring/FlooringByRoom";
import BaseMent from "../../component/Pages/Flooring/Gallery/BaseMent";
import BathRoom from "../../component/Pages/Flooring/Gallery/BathRoom";
import BedRoom from "../../component/Pages/Flooring/Gallery/BedRoom";
import DiningRoom from "../../component/Pages/Flooring/Gallery/DiningRoom";
import KitchenRoom from "../../component/Pages/Flooring/Gallery/KitchenRoom";
import LaundryRoom from "../../component/Pages/Flooring/Gallery/LaundryRoom";
import LivingRoom from "../../component/Pages/Flooring/Gallery/LivingRoom";
import OfficeRoom from "../../component/Pages/Flooring/Gallery/OfficeRoom";
import PhotoGallery from "../../component/Pages/Flooring/PhotoGallery";
import DurableFlooring from "../../component/Pages/Flooring/ProductDetails/DurableFlooring";
import EcoFriendly from "../../component/Pages/Flooring/ProductDetails/EcoFriendly";
import KidFriendly from "../../component/Pages/Flooring/ProductDetails/KidFriendly";
import PetFriendly from "../../component/Pages/Flooring/ProductDetails/PetFriendly";
import SoftFlooring from "../../component/Pages/Flooring/ProductDetails/SoftFlooring";
import CustomerService from "../../component/Pages/Help/CustomerService";
import FAQs from "../../component/Pages/Help/FAQs";
import ProductCare from "../../component/Pages/Help/ProductCare";
import CarpetCare from "../../component/Pages/Help/ProductCare/CarpetCare";
import HardwoodCare from "../../component/Pages/Help/ProductCare/HardwoodCare";
import LaminateCare from "../../component/Pages/Help/ProductCare/LaminateCare";
import SpcCare from "../../component/Pages/Help/ProductCare/SpcCare";
import TileCare from "../../component/Pages/Help/ProductCare/TileCare";
import Home from "../../component/Pages/Home/Home";
import Convenience from "../../component/Pages/LmtileWorks/Convenience";
import LmtileWorks from "../../component/Pages/LmtileWorks/LmtileWorks";
import NextDay from "../../component/Pages/LmtileWorks/NextDay";
import Offers from "../../component/Pages/Offers/Offers";
import OfferSchedule from "../../component/Pages/Offers/Schedule/OfferSchedule";
import Schedule from "../../component/Pages/Schedule/Schedule";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import UserAllProducts from "../../component/Pages/Product/UserAllProducts";
import ProductDetails from "../../component/Pages/Product/Product-Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <UserAllProducts />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/offerSchedule",
        element: <OfferSchedule />,
      },
      {
        path: "/lmtileWorks",
        element: <LmtileWorks />,
      },
      {
        path: "/convenience",
        element: <Convenience></Convenience>,
      },
      {
        path: "/nextDay",
        element: <NextDay></NextDay>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/carpetCategory",
        element: <CarpetCategories></CarpetCategories>,
      },
      {
        path: "/laminateCategory",
        element: <Laminate></Laminate>,
      },
      {
        path: "/hardwoodCategory",
        element: <HardwoodCategory></HardwoodCategory>,
      },
      {
        path: "/spcCategory",
        element: <SpcCategory></SpcCategory>,
      },
      {
        path: "/tileCategory",
        element: <TileCategory></TileCategory>,
      },
      {
        path: "/sinkCategory",
        element: <SinkCategory></SinkCategory>,
      },
      {
        path: "/cabinetCategory",
        element: <CabinetCategory></CabinetCategory>,
      },
      {
        path: "/forBusiness",
        element: <ForBusiness></ForBusiness>,
      },
      {
        path: "/questions",
        element: <Questions></Questions>,
      },
      {
        path: "/financing",
        element: <Financing></Financing>,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/customerService",
        element: <CustomerService></CustomerService>,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/productCare",
        element: <ProductCare></ProductCare>,
      },
      {
        path: "/carpetCare",
        element: <CarpetCare></CarpetCare>,
      },
      {
        path: "/laminateCare",
        element: <LaminateCare></LaminateCare>,
      },
      {
        path: "/hardwoodCare",
        element: <HardwoodCare></HardwoodCare>,
      },
      {
        path: "/spcCare",
        element: <SpcCare></SpcCare>,
      },
      {
        path: "/tileCare",
        element: <TileCare></TileCare>,
      },
      {
        path: "/flooringByNeed",
        element: <FlooringByNeed></FlooringByNeed>,
      },
      {
        path: "/flooringByRoom",
        element: <FlooringByRoom></FlooringByRoom>,
      },
      {
        path: "/petFriendly",
        element: <PetFriendly></PetFriendly>,
      },
      {
        path: "/ecoFriendly",
        element: <EcoFriendly></EcoFriendly>,
      },
      {
        path: "/kidFriendly",
        element: <KidFriendly></KidFriendly>,
      },
      {
        path: "/durableFlooring",
        element: <DurableFlooring></DurableFlooring>,
      },
      {
        path: "/softFlooring",
        element: <SoftFlooring></SoftFlooring>,
      },
      {
        path: "/photoGAllery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/livingRoom",
        element: <LivingRoom></LivingRoom>,
      },
      {
        path: "/kitchenRoom",
        element: <KitchenRoom></KitchenRoom>,
      },
      {
        path: "/BedRoom",
        element: <BedRoom></BedRoom>,
      },
      {
        path: "/diningRoom",
        element: <DiningRoom></DiningRoom>,
      },
      {
        path: "/bathRoom",
        element: <BathRoom></BathRoom>,
      },
      {
        path: "/baseMent",
        element: <BaseMent></BaseMent>,
      },
      {
        path: "/laundryRoom",
        element: <LaundryRoom></LaundryRoom>,
      },
      {
        path: "/officeRoom",
        element: <OfficeRoom></OfficeRoom>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/appointments",
        element: <Appointment />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/add-offer-poster",
        element: <AddPosterOffer />,
      },
      {
        path: "/dashboard/add-offer-product",
        element: <AddOfferProduct />,
      },
      {
        path: "/dashboard/add-package",
        element: <AddPackage />,
      },
    ],
  },
]);
export default router;
