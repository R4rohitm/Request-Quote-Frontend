import React, { useState } from 'react';
import "./AdminStyles.css";

const Accordion = ({ e }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(e);

  return (
    <>
    <div className="accordion-item">
      <div className="accordion" onClick={() => setIsActive(!isActive)}>
        <div>
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
                  <div>{e.phone.dialcode} {e.phone.number}</div>
                </div>
        </div>
        <div></div>
      </div>
      {isActive && <div className="accordion-content">
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
                  {e.incoterms ? (
                    <>
                      <tr>
                        <td>Incoterms</td>
                        <td>{e.incoterms}</td>
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
                  e.transportation_by === "ULDC" ? (
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
                        <td>{e.loading_rate} kg/day</td>
                      </tr>
                      <tr>
                        <td>Discharging Rate</td>
                        <td>{e.discharging_rate} kg/day</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {!e.by_units && (e.transportation_by === "LCL" ||
                  e.transportation_by === "SC")? (
                    <>
                      <tr>
                        <td>Weight</td>
                        <td>{e.weight} kg</td>
                      </tr>
                      <tr>
                        <td>Volume</td>
                        <td>{e.volume} m3</td>
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
                  {e.associated_services ? (
                    <>
                      {e.associated_services.inspection ?<>
                      <tr>
                      <td>Associated Services</td>
                      <td>Inspection</td>
                      </tr>
                      </>:<></>}
                      {e.associated_services.insurance ?<>
                      <tr>
                      <td>Associated Services</td>
                      <td>Insurance</td>
                      </tr>
                      </>:<></>}
                      {e.associated_services.certification ?<>
                      <tr>
                      <td>Associated Services</td>
                      <td>Certification</td>
                      </tr>
                      </>:<></>}
                      {e.associated_services.customs_clearance ?<>
                      <tr>
                      <td>Associated Services</td>
                      <td>Customs Clearance</td>
                      </tr>
                      </>:<></>}
                    </>
                  ) : (
                    <></>
                  )}
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
                    <td>Phone &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; country : {e.phone.country} </td>
                    <td><> {e.phone.dialcode} {e.phone.number} </></td>
                  </tr>
                </table>
        </div>}
    </div>
    
    </>
  );
};

export default Accordion;
