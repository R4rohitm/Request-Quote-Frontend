import React from "react";
import "./AdminStyles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Accordion from "./Accordion";
import Pagination from "./Pagination";


const Admin = () => {
  const [rq, setRq] = useState([]);
  const [showModal, setShowModal] = useState(false);
  var [errmsg, Seterrmsg] = useState("No Results !");
  const [formData, Setformdata] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = rq.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get(`https://intoglo-first-api.herokuapp.com/quote/fetchall`)
      .then(({ data }) => {
        setRq(data);
        if (data.length <= 0) {
          Seterrmsg("No Results found !");
          setShowModal(true);
        }
      });
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRq([]);
    axios
      .post(
        `https://intoglo-first-api.herokuapp.com/quote/fetchByEmail`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((responce) => {
        const { data } = responce;
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };

  const handle_sea = () => {
    setRq([]);
    axios
      .get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/sea`)
      .then(({ data }) => {
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };

  const handle_all = () => {
    window.location.reload();
  };

  const handle_air = () => {
    setRq([]);
    axios
      .get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/air`)
      .then(({ data }) => {
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };


  const handle_lcl = () => {
    setRq([]);
    axios
      .get(`https://intoglo-first-api.herokuapp.com/quote/fetchbymode/LCL`)
      .then(({ data }) => {
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };

  const handle_fcl = () => {
      setRq([]);
      axios
      .get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/FCL`)
      .then(({ data }) => {
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };

  const handle_air_sc = () => {
    setRq([]);
    axios
      .get(
        `https://intoglo-first-api.herokuapp.com/quote/fetchByMode/air?transportation_by=SC`
      )
      .then(({ data }) => {
        setRq(data);
      })
      .catch((error) => {
        if (error.response) {
          setRq([]);
          Seterrmsg(`${error.response.data.message}`);
          setShowModal(true);
        }
      });
  };

  return (
    <>
      <div className="header">
        <div className="header1">
          <img
            src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/logo/original/intoglo_logo.png?tr=w-150"
            alt="intoglo_logo"
          />
        </div>
      </div>
      <div className="body">
        <div className="body1">
          <div className="sidebar">
            <aside class="w-64" aria-label="Sidebar">
              <div class="overflow-y-auto py-4 px-3 bg-[#1f2937] rounded dark:bg-gray-800">
                <ul class="space-y-2">
                  <li>
                    <a
                      href="/admin"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/requestquote"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Request Quote
                      </span>
                      <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Total Quotes
                      </span>
                      <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {rq.length}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="searchfil">
              <br></br>
              <button
                type="button"
                onClick={handle_sea}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SEA
              </button>
              <button
                type="button"
                onClick={handle_air}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                AIR
              </button>
              <button
                type="button"
                onClick={handle_all}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                RESET
              </button>
              <button
                type="button"
                onClick={handle_lcl}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                LCL
              </button>
              <button
                type="button"
                onClick={handle_fcl}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                FCL
              </button>
              <button
                type="button"
                onClick={handle_air_sc}
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SC{" "}
              </button>
              <br></br>
              <br></br>
              <div className="searchform">
                <h1>Search By Email : </h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email..."
                    onChange={handleChange}
                  />
                  <br></br>
                  <input
                    type="submit"
                    class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div></div>
          <div className="body2">
            <div className="data">
              <div className="theadmain">
                <div>Quote Id</div>
                <div>Delivery Mode</div>
                <div>Transportation By</div>
                <div>Location From</div>
                <div>Location To</div>
                <div>Name</div>
                <div>Email</div>
                <div>Phone Number</div>
              </div>
              {rq.length !== 0 ? (
                <>
                {currentPosts && currentPosts.map((e)=>{
                  return(
                    <>
                     <Accordion e={e}/>
                    </>
                    )
                })}
                </>
              ) : (
                <>
                  <button class="accordion_nores">
                    <div class="spinner-4"></div>
                  </button>
                </>
              )}
            </div>
            <div className="pagination">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={rq.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {errmsg}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      window.location.reload();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Admin;
