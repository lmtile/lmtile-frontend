import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import OffersModal from "../Offers/OffersModal";
import {
  BUCKET_DOMAIN,
  ProductColor,
  getColorDetails,
} from "../../../helper/Helper";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./UserAllProducts.css";
import qs from "query-string";
import _ from "lodash";

export default function UserAllProducts() {
  const [loading, setLoading] = useState(false);
  const [allCatergory, setAllCatergory] = useState([]);
  const [sub_cat, set_sub_cat] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [per_page] = useState(12);
  const [select_category, set_select_category] = useState("");
  const [select_sub_category, set_select_sub_category] = useState("");
  const [color, setColor] = useState("");

  const [isCalling, setIscalling] = useState(1);

  const location = useLocation();
  const queryParam = qs.parse(location.search);

  const searchColor = queryParam["color"];
  const searchSubCat = queryParam["type"];

  if (searchColor) {
    if (color !== searchColor) setColor(searchColor);
  } else {
    if (color) setColor("");
  }

  if (searchSubCat) {
    if (select_sub_category !== searchSubCat)
      set_select_sub_category(searchSubCat);
  } else {
    if (select_sub_category) set_select_sub_category("");
  }

  let category = useParams()?.category;
  if (category !== select_category) {
    set_select_category(category);
  }

  useEffect(() => {
    if (isCalling === 1) {
      getAllcategory();
      setIscalling(2);
    }
    getAllProduct();
  }, [select_category, color, page, select_sub_category]);

  const getAllProduct = () => {
    setLoading(true);

    axios
      .get(
        `/api/product/get-all-products?per_page=${per_page}&page=${page}&category=${select_category}&color=${color}&type=${select_sub_category}`
      )
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { products, total } = res.data;

          let result = products.map((product) => {
            product.color_details = getColorDetails(product.color);
            return product;
          });

          setProducts(result);
          setTotal(total);
        } else {
          message.error(res.data.message);
          setProducts([]);
          setTotal(0);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        message.error("Something went wrong!!!");
      });
  };

  const getAllcategory = () => {
    axios
      .get("/api/category/get-all-category")
      .then((res) => {
        if (res.data.success) {
          let { category } = res.data;
          let allCatergory = category.map((cat) => {
            return {
              label: cat.category,
              value: cat._id,
              sub_cat: cat.sub_cat,
            };
          });

          let index = _.findIndex(allCatergory, ({ label }) => {
            return label.toLowerCase() === select_category;
          });

          let { sub_cat } = allCatergory[index];

          setAllCatergory(allCatergory);
          set_sub_cat(sub_cat);
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <OffersModal />
      <div className="lg:flex  bg-base-100">
        <div className="pl-5 gap-x-5 mt-20">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered border-black shadow-2xl my-5"
          />

          <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
            <input type="checkbox" />

            <div className="collapse-title font-bold">Categories</div>
            <div className="collapse-content">
              {allCatergory.map((cat, key) => {
                return (
                  <div key={key}>
                    <Link
                      to={{
                        pathname: `/products/${cat.label.toLowerCase()}`,
                        // search: qs.stringify({}),
                      }}
                      onClick={() => {
                        set_sub_cat(cat.sub_cat);
                        set_select_category(cat.label.toLowerCase());
                        setPage(1);
                        setColor("");
                        set_select_sub_category("");
                      }}
                      className="font-bold text-sm"
                    >
                      {cat.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {sub_cat.length > 0 && (
            <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
              <input type="checkbox" />
              <div className="collapse-title font-bold">Type</div>
              <div className="collapse-content">
                {sub_cat.map((cat, key) => {
                  const newQueryParam = {
                    ...queryParam,
                    type: cat.label,
                  };
                  return (
                    <div key={key}>
                      <Link
                        to={{
                          pathname: `/products/${select_category}`,
                          search: qs.stringify(newQueryParam),
                        }}
                        onClick={() => {
                          set_select_sub_category(cat.label);
                          setPage(1);
                        }}
                        className="font-bold text-sm top-0"
                      >
                        {cat.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
            <input type="checkbox" />
            <div className="collapse-title font-bold">Color</div>
            <div className="collapse-content">
              {ProductColor.map((cat, key) => {
                const newQueryParam = {
                  ...queryParam,
                  color: cat.value,
                };
                return (
                  <div key={key}>
                    <Link
                      to={{
                        pathname: `/products/${select_category}`,
                        search: qs.stringify(newQueryParam),
                      }}
                      className="font-bold text-sm"
                      onClick={() => {
                        setColor(cat.value);
                        setPage(1);
                      }}
                    >
                      {cat.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mb-10 mt-20 mx-auto">
          {products.map((product, key) => {
            return (
              <Link key={key} to={`/product-details/${product._id}`}>
                <div className="hover:shadow-xl shadow-2xl shadow-black w-80  p-5 bg-base-100">
                  <div>
                    <img
                      src={`${BUCKET_DOMAIN}${product.images[0]} `}
                      alt={product.name}
                      className="h-72"
                    />
                    <p className="text-xl font-bold">{product.name}</p>
                    <p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "10px",
                            backgroundColor: product?.color_details?.color,
                          }}
                        ></div>
                        {product?.color_details?.label}
                      </div>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div id="react-paginate">
        <div className="">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={({ selected }) => {
              setPage(selected + 1);
            }}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(total / per_page)}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </LoadingOverlay>
  );
}
