import React from "react";

const Posts = ({ posts }) => {
  const handleacc = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  };
  return (
    <>
      {posts &&
        posts.map((e) => {
          console.log(e);
          return (
            <>
              <button onClick={handleacc} class="accordion">
                <div className="thead">
                  <div>{e.id}</div>
                  <div>{e.delivery_mode}</div>
                  <div>{e.transportation_by}</div>
                  <div>{e.location_from}</div>
                  <div>{e.location_to}</div>
                  <div>
                    {e.first_name}&nbsp;{e.last_name}
                  </div>
                  <div>{e.email}</div>
                  <div>{e.phone}</div>
                </div>
              </button>
              <div class="panel">
                <table id="customers">
                  <tr>
                    <td>Request Quote Id </td>
                    <td>{e.id}</td>
                  </tr>
                  {/* Product details */}
                  <tr>
                    <td>Product Name </td>
                    <td>{e.product_details.name}</td>
                  </tr>
                  <tr>
                    <td>Product Discription</td>
                    <td>{e.product_details.description}</td>
                  </tr>
                  <tr>
                    <td>HS Code</td>
                    <td>{e.product_details.hscode}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{e.product_details.category}</td>
                  </tr>
                  <tr>
                    <td>Level</td>
                    <td>{e.product_details.level}</td>
                  </tr>
                  {e.product_details.hazardous_cargo ? (
                    <>
                      <tr>
                        <td>Hazardous Cargo</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>IMO Class</td>
                        <td>{e.product_details.hazardous_cargo.imo_class}</td>
                      </tr>
                      <tr>
                        <td>UN-Number</td>
                        <td>{e.product_details.hazardous_cargo.un_number}</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {e.product_details.perishable_cargo ? (
                    <>
                      <tr>
                        <td>Perishable Cargo</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Temperature</td>
                        <td>
                          {e.product_details.perishable_cargo.temperature}
                          {e.product_details.perishable_cargo.type}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {e.product_details.oversized_cargo ? (
                    <>
                      <tr>
                        <td>Oversized Cargo</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Oversized Cargo Dimentions</td>
                        <td>
                          Length : {e.product_details.oversized_cargo.length}{" "}
                          &nbsp;&nbsp;&nbsp; Height :{" "}
                          {e.product_details.oversized_cargo.height}{" "}
                          &nbsp;&nbsp;&nbsp; Width :{" "}
                          {e.product_details.oversized_cargo.width}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {e.product_details.liquid_cargo ? (
                    <>
                      <tr>
                        <td>Liquid Cargo</td>
                        <td>Yes</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  <tr>
                    {/* Cargo details */}
                    <td>Delivery Mode</td>
                    <td>{e.delivery_mode}</td>
                  </tr>
                  <tr>
                    <td>Transportation By</td>
                    <td>{e.transportation_by}</td>
                  </tr>
                  {e.transportation_by === "FCL" ||
                  e.transportation_by === "ULD" ? (
                    <>
                      <tr>
                        <td>Container Type</td>
                        <td>{e.container_type}</td>
                      </tr>
                      <tr>
                        <td>Container Quantity</td>
                        <td>{e.containers_quantity}</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {e.transportation_by === "Bulk" ? (
                    <>
                      <tr>
                        <td>Ship Type</td>
                        <td>{e.ship_type}</td>
                      </tr>
                      <tr>
                        <td>Gross Weight</td>
                        <td>{e.gross_weight}</td>
                      </tr>
                      <tr>
                        <td>Loading Rate</td>
                        <td>{e.loading_rate}</td>
                      </tr>
                      <tr>
                        <td>Discharging Rate</td>
                        <td>{e.discharging_rate}</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {!e.by_units ? (
                    <>
                      <tr>
                        <td>Weight</td>
                        <td>{e.weight}mt</td>
                      </tr>
                      <tr>
                        <td>Volume</td>
                        <td>{e.volume}m3</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* Loading details */}
                  <tr>
                    <td>Location From</td>
                    <td>{e.location_from}</td>
                  </tr>
                  <tr>
                    <td>Location To</td>
                    <td>{e.location_to}</td>
                  </tr>
                  <tr>
                    <td>Ready to load</td>
                    <td>{e.ready_to_load}</td>
                  </tr>
                  <tr>
                    <td>Additional Information</td>
                    <td>{e.additional_information}</td>
                  </tr>
                  {/* <tr>
                                 <td>Associated services</td>
                                 <td>{e.associated_services}</td>
                                 </tr> */}
                  {e.by_units ? (
                    <>
                      {e.dimensions.map((c) => {
                        return (
                          <>
                            <>
                              <tr>
                                <td>Dimensions</td>
                                <td>
                                  Width : {c.width} &nbsp;&nbsp;&nbsp; Height :{" "}
                                  {c.height} &nbsp;&nbsp;&nbsp; Length :{" "}
                                  {c.length} &nbsp;&nbsp;&nbsp; Quantity :{" "}
                                  {c.quantity} &nbsp;&nbsp;&nbsp; Gross Weight :{" "}
                                  {c.gross_weight}
                                </td>
                              </tr>
                            </>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td>Dimensions</td>
                        <td>N/A</td>
                      </tr>
                    </>
                  )}
                  {/* Contact info */}
                  <tr>
                    <td>First_Name </td>
                    <td>{e.first_name}</td>
                  </tr>
                  <tr>
                    <td>Last_Name </td>
                    <td>{e.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{e.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{e.phone}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Posts;
