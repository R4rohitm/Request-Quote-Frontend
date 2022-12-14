import React, { useEffect, useState, useRef } from "react";
import { BeatLoader, BarLoader } from "react-spinners";

import Sea from "./Sea";
import Air from "./Air";
import AdditionalProductInfo from "./AdditionalProductInfo";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AssociatedServices from "./AssociatedServices";
import Incoterms from "./Incoterms";
import CountryIsoCode from "./CountryIsoCode";

// today's date function

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

const RequestQuote2 = () => {
  const [seaSelected, setSeaSelected] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [hsQuery, setHsQuery] = useState("");
  const [hsCodesLoading, setHsCodesLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [cities1, setCities1] = useState();
  const [cityQuery1, setCityQuery1] = useState("");
  const [cities2, setCities2] = useState();
  const [cityQuery2, setCityQuery2] = useState("");
  const inputProduct = useRef("");
  const inputCity1 = useRef("");
  const inputCity2 = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [clearProdInputIcon, setClearProdInputIcon] = useState(false);
  const [additionalProductInfo, setAdditionalProductInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  var prod=[];
  //
  const [formData, setFormData] = useState({
    delivery_mode: "Sea",
    transportation_by: "FCL",
    dimensions: [],
    product_details: {},
    phone: { dialcode: "+91", country: "India", isocode: "IN" },
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://intoglo-first-api.herokuapp.com/quote/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      let data = await response.json();
      console.log(data);
      if (data.status === 200) {
        setIsLoading(false);
        setShowModal(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickProductName = (name, description, hscode) => {
    if (description) {
      inputProduct.current = `${name} : ${description}`;
    } else {
      inputProduct.current = `${name}`;
    }

    let product_details = document.getElementById("product_details");
    let hscodespan = document.getElementById("hscode");
    hscodespan.innerText = hscode;
    product_details.value = inputProduct.current;
    setAdditionalProductInfo(true);
    setClearProdInputIcon(true);
  };

  const clearProductInput = () => {
    let product_details = document.getElementById("product_details");
    let hscodespan = document.getElementById("hscode");
    product_details.value = "";
    product_details.target.innerText = "";
    hscodespan.innerText = "";
    setAdditionalProductInfo(false);
    setClearProdInputIcon(false);
  };

  const handleClickCity1 = (city, country) => {
    inputCity1.current = `${city}, ${country}`;
    let location_from = document.getElementById("location_from");
    location_from.value = inputCity1.current;
    setFormData({ ...formData, location_from: inputCity1.current });
    console.log(inputCity1.current);
  };

  const handleClickCity2 = (city, country) => {
    inputCity2.current = `${city}, ${country}`;
    let location_to = document.getElementById("location_to");
    location_to.value = inputCity2.current;
    setFormData({ ...formData, location_to: inputCity2.current });
    console.log(inputCity2.current);
  };

  const getProductDetails = async (hsQuery) => {
    try {
      let response = await fetch(
        // `https://intoglo-first-api.herokuapp.com/search/Findhs?search=${hsQuery}`
        `http://localhost:8060/search/hscodes?q=${hsQuery}`
      );
      let data = await response.json();
      console.log(data.hits.hits);
      if (data) {
        setHsCodesLoading(false);
      }
      setProductDetails(data.hits.hits);

    } catch (e) {
      if (e) {
        setHsCodesLoading(false);
        setNoResults(true);
      }
      console.log(e);
    }
  };


  //
  let product_details = document.getElementById("product_details");

  const getLocation1 = async (cityQuery1) => {
    console.log(cityQuery1);
    try {
      // let response = await fetch(
      //   `https://api.api-ninjas.com/v1/city?name=${cityQuery1}`,
      //   { headers: { "X-Api-Key": "UczdRN7ix8nBYXWfPO030g==raOcRa79svjw6Ht2" } }
      // );
      let response = await fetch(
        `https://intoglo-first-api.herokuapp.com/city/findcity?search=${cityQuery1}`
      );
      let data = await response.json();
      console.log(data);
      setCities1(data);
    } catch (e) {
      console.log(e);
    }
  };

  // UczdRN7ix8nBYXWfPO030g==raOcRa79svjw6Ht2

  const getLocation2 = async (cityQuery2) => {
    try {
      // let response = await fetch(
      //   `https://api.api-ninjas.com/v1/city?name=${cityQuery2}`,
      //   { headers: { "X-Api-Key": "UczdRN7ix8nBYXWfPO030g==raOcRa79svjw6Ht2" } }
      // );
      let response = await fetch(
        `https://intoglo-first-api.herokuapp.com/city/findcity?search=${cityQuery2}`
      );
      let data = await response.json();
      setCities2(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setNoResults(false);
    if (hsQuery.length >= 1) {
      setHsCodesLoading(true);
    } else if (hsQuery.length === 0) {
      setHsCodesLoading(false);
    }

    if (hsQuery.length <= 2) {
      setProductDetails(null);
      return;
    } else if (hsQuery.length >= 2) {
      getProductDetails(hsQuery);
    }
  }, [hsQuery]);

  useEffect(() => {
    if (cityQuery1.length <= 2) {
      setCities1(null);
      return;
    }
    getLocation1(cityQuery1);
  }, [cityQuery1]);

  useEffect(() => {
    if (cityQuery2.length <= 2) {
      setCities2(null);
      return;
    }
    getLocation2(cityQuery2);
  }, [cityQuery2]);
  return (
    <div class="relative my-12 mx-[3%] lg-mx-[15%] md:mx-[5%] sm:mx-[5%] py-6 px-8 border bg-white shadow-md">
      <div class="mb-4 text-xl font-bold md:text-3xl lg:text-4xl flex flex-wrap items-center gap-3">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#4F46E5] from-sky-400">
          Request a Quote
        </span>
        <img
          class="w-8 h-8 mt-2 object-contain"
          src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/favicon/original/intoglo_favicon.png"
          alt="quoteicon"
        />
      </div>
      <p class="mb-10 px-[1px] font-medium text-black">
        And get the best rates from the leading logistics providers.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="mb-6 lg:w-8/12 sm:w-full">
          <h5 class="text-xl font-medium mb-5">Cargo Details</h5>
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Product <span class="text-[red]">*</span>
            </label>
            <div class="flex flex-col relative">
              <div class="bg-white border relative rounded-md border-gray-300 focus:outline-[#4F46E5] hover:border-[#4F46E5] flex justify-between items-center gap-3 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 focus:text-[#4F46E5]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <input
                  type="text"
                  id="product_details"
                  autoComplete="off"
                  class="text-md text-gray-900  block w-full p-2.5 focus:outline-none "
                  placeholder="Enter commodity type or HS code"
                  required
                  onChange={(e) => setHsQuery(e.target.value)}
                  onFocus={() => setClearProdInputIcon(true)}
                  onBlur={() => setClearProdInputIcon(false)}
                  onInvalid={(F) => {
                    F.target.setCustomValidity("Enter valid product details");
                    F.target.style.border = "1px solid red";
                  }}
                  onInput={(F) => {
                    F.target.setCustomValidity("");
                    F.target.style.border = "none";
                  }}
                />

                {!!product_details &&
                !!product_details.value &&
                product_details.value.length >= 2 ? (
                  <span id="hscode" class="text-md"></span>
                ) : null}
                {clearProdInputIcon ? (
                  <span
                    class="cursor-pointer"
                    onClick={() => clearProductInput()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : null}
              </div>
              {hsCodesLoading ? (
                <div class="border m-auto absolute w-full mt-12 h-28 z-30 bg-white flex place-items-center rounded-md">
                  <BarLoader class="m-auto" color="#4F46E5" />
                </div>
              ) : null}
              {noResults ? (
                <div
                  class="flex p-4 mb-4 mt-2 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-bold">No Results Found!</span> Try
                    Searching for Another Product.
                  </div>
                </div>
              ) : null}
              {productDetails && productDetails.length > 0 ? (
                <div class="border absolute w-full mt-12 max-h-40 z-30 bg-white overflow-y-scroll overflow-x-hidden rounded-md">
                  {productDetails.map((product) => {
                    console.log(product);
                    return (
                      <div
                        onClick={() => {
                          handleClickProductName(
                            product._source.name,
                            product._source.description,
                            product._source.hscode
                          );
                          setFormData({
                            ...formData,
                            product_details: product._source,
                          });
                          setHsQuery("");
                        }}
                        class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        <h2>
                          {product._source.name} &nbsp;&nbsp;&nbsp;{" "}
                          {product._source.description} &nbsp; {product._source.hscode}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            {additionalProductInfo ? (
              <AdditionalProductInfo
                formData={formData}
                setFormData={setFormData}
                handleChange={handleChange}
              />
            ) : null}
          </div>
          {/* Incoterms */}
          <h5 class="text-xl font-medium mb-5">Incoterms</h5>
          <Incoterms formData={formData} setFormData={setFormData} />
          {/* Delivery Type */}
          <h5 class="text-xl font-medium mb-5">Delivery</h5>
          <div class="flex space-x-2 justify-start mb-10">
            <div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    delivery_mode: "Sea",
                    transportation_by: "FCL",
                  });
                  setSeaSelected(true);
                }}
                className={
                  seaSelected
                    ? "px-4 pt-1.5 pb-1 bg-[#4F46E5] text-white font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                    : "px-4 pt-1.5 pb-1 bg-white text-black font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ship w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"></path>
                  <path d="M4 18l-1 -5h18l-2 4"></path>
                  <path d="M5 13v-6h8l4 6"></path>
                  <path d="M7 7v-4h-1"></path>
                </svg>
                SEA
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    delivery_mode: "Air",
                    transportation_by: "SC",
                  });
                  setSeaSelected(false);
                }}
                className={
                  !seaSelected
                    ? "px-4 pt-1.5 pb-1 bg-[#4F46E5] text-white font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                    : "px-4 pt-1.5 pb-1 bg-white text-black font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plane-inflight w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7z"></path>
                  <path d="M3 21h18"></path>
                </svg>
                AIR
              </button>
            </div>
          </div>
          {/* SEA and AIR Components*/}
          {seaSelected ? (
            <Sea
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
          ) : (
            <Air
              setFormData={setFormData}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {/* Next Part */}

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="flex flex-col relative">
              <div class="relative">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  From <span class="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  id="location_from"
                  autoComplete="off"
                  onKeyUp={(e) => {
                    setCityQuery1(e.target.value);
                  }}
                  class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                  placeholder="City, Port"
                  required
                  onInvalid={(F) => {
                    F.target.setCustomValidity("Enter valid location");
                    F.target.style.border = "1px solid red";
                  }}
                  onInput={(F) => {
                    F.target.setCustomValidity("");
                    F.target.style.border = "none";
                  }}
                />
              </div>
              {cities1 ? (
                <div
                  id="locfrom"
                  class="border absolute shadow-lg w-full mt-[72px] max-h-40 z-30 bg-white overflow-y-scroll overflow-x-hidden rounded-md countryscollbar"
                >
                  {cities1.map((city) => {
                    return (
                      <div
                        onClick={() => {
                          setCityQuery1("");
                          handleClickCity1(city.name, city.country);
                          setCities1(null);
                        }}
                        class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap hover:bg-[#4F46E5] hover:text-white"
                        key={city._id}
                      >
                        <h2>
                          {city.name} : {city.country}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <div class="flex flex-col relative">
              <div class="relative">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  To <span class="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  id="location_to"
                  autoComplete="off"
                  onKeyUp={(e) => setCityQuery2(e.target.value)}
                  class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                  placeholder="City, Port"
                  required
                  onInvalid={(F) => {
                    F.target.setCustomValidity("Enter valid location");
                    F.target.style.border = "1px solid red";
                  }}
                  onInput={(F) => {
                    F.target.setCustomValidity("");
                    F.target.style.border = "none";
                  }}
                />
              </div>
              {cities2 ? (
                <div
                  id="locto"
                  class="border absolute w-full mt-[72px] max-h-40 z-30 bg-white overflow-y-scroll overflow-x-hidden rounded-md countryscollbar"
                >
                  {cities2.map((city) => {
                    return (
                      <div
                        onClick={() => {
                          setCityQuery2("");
                          handleClickCity2(city.name, city.country);
                          setCities2(null);
                        }}
                        class="text-sm cursor-pointer text-gray-900 font-medium px-6 py-4 whitespace-nowrap hover:bg-[#4F46E5] hover:text-white"
                        key={city._id}
                      >
                        <h2>
                          {city.name} : {city.country}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ready to Load <span class="text-[red]">*</span>
              </label>
              <input
                type="date"
                min={today}
                name="ready_to_load"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="Select"
                required
                onInvalid={(F) => {
                  F.target.setCustomValidity("Enter valid date");
                  F.target.style.border = "1px solid red";
                }}
                onInput={(F) => {
                  F.target.setCustomValidity("");
                  F.target.style.border = "none";
                }}
              />
            </div>
          </div>
          <div class="mb-10">
            <label
              for="additional_information"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Additional Information
            </label>
            <textarea
              type="text"
              style={{ resize: "none" }}
              name="additional_information"
              onChange={(e) => handleChange(e)}
              class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="Write a message..."
            />
          </div>
          <h5 class="relative text-xl font-medium mb-5">Associated services</h5>
          <AssociatedServices formData={formData} setFormData={setFormData} />
          <h5 class="text-xl font-medium mb-5">Contact Details</h5>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="First Name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="First Name"
                required
                onInvalid={(F) => {
                  F.target.setCustomValidity("Enter your first name.");
                  F.target.style.border = "1px solid red";
                }}
                onInput={(F) => {
                  F.target.setCustomValidity("");
                  F.target.style.border = "none";
                }}
              />
            </div>
            <div>
              <label
                for="Last Name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="Last Name"
                required
                onInvalid={(F) => {
                  F.target.setCustomValidity("Enter your last name.");
                  F.target.style.border = "1px solid red";
                }}
                onInput={(F) => {
                  F.target.setCustomValidity("");
                  F.target.style.border = "none";
                }}
              />
            </div>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone <span class="text-[red]">*</span>
              </label>
              <div class="flex justify-between gap:2 items-center bg-white rounded-sm border border-gray-300 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] w-full">
                <CountryIsoCode
                  class="w-4/12"
                  formData={formData}
                  setFormData={setFormData}
                />
                <input
                  type="number"
                  name="phone"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: { ...formData.phone, number: e.target.value },
                    })
                  }
                  class="bg-white text-gray-900 text-sm block w-8/12 p-2.5 focus:outline-none "
                  placeholder="123-456-7890"
                  required
                  onInvalid={(F) => {
                    F.target.setCustomValidity("Enter valid phone number.");
                    F.target.style.border = "1px solid red";
                  }}
                  onInput={(F) => {
                    F.target.setCustomValidity("");
                    F.target.style.border = "none";
                  }}
                />
              </div>
            </div>
            <div>
              <label
                for="Email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email <span class="text-[red]">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="johndoe@gmail.com"
                required
                onInvalid={(F) => {
                  F.target.setCustomValidity("Enter valid email.");
                  F.target.style.border = "1px solid red";
                }}
                onInput={(F) => {
                  F.target.setCustomValidity("");
                  F.target.style.border = "none";
                }}
              />
            </div>
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-white rounded-sm  border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 flex"
            >
              I agree with the{" "}
              <p class="text-blue-600 hover:underline dark:text-blue-500 ml-1">
                terms and conditions
              </p>
              .
            </label>
          </div>

          {isLoading ? (
            <BeatLoader color="#4F46E5" />
          ) : (
            <button
              type="submit"
              class="text-white bg-[#4F46E5] hover:bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[70%] m-auto md:w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex gap-3 font-medium text-sm md:text-lg items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10 border border-white fill-[#4F46E5] text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <h4>Your Request has been sent Successfully</h4>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-medium outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-sm md:text-lg leading-relaxed">
                    Thank you for filling the request quote form, we will get
                    back to you shortly.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 md:p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-medium uppercase px-3 py-2 md:px-6 md:py-3 text-[10px] md:text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      window.location.reload();
                    }}
                  >
                    Close
                  </button>
                  <button
                    class="newrq"
                    className="bg-[#4F46E5] text-white active:bg-[#4F46E5] font-bold uppercase text-[10px] md:text-sm px-3 py-2 md:px-6 md:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      window.location.reload();
                    }}
                  >
                    New Request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default RequestQuote2;
