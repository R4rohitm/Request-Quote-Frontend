import React, { useState } from "react";

const AssociatedServices = ({ formData, setFormData }) => {
  const [insurance, setInsurance] = useState(false);
  const [inspection, setInspection] = useState(false);
  const [certification, setCertification] = useState(false);
  const [customs, setCustoms] = useState(false);
  //
  const [insuranceInfo, setInsuranceInfo] = useState(false);
  const [inspectionInfo, setInspectionInfo] = useState(false);
  const [certificationInfo, setCertificationInfo] = useState(false);
  const [customsInfo, setCustomsInfo] = useState(false);
  return (
    <div class="flex flex-col items-start  sm:flex-row sm:items-center gap-x-6 mb-6 w-[80%] sm:w-full xl:w-[140%] xl:gap-x-3 flex-wrap">
      <button
        type="button"
        onClick={() => {
          setInsurance(!insurance);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              insurance: !insurance,
            },
          });
        }}
        onMouseEnter={() => setInsuranceInfo(true)}
        onMouseLeave={() => setInsuranceInfo(false)}
        class={
          insurance
            ? "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={insurance}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/YlP9jAY.png" alt="" class="w-5 h-5" />
          <p class="font-sm font-sans font-light">Insurance</p>
        </div>
        {insuranceInfo ? (
          <div class=" absolute bottom-14 -left-20 max-w-lg text-sm md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p class="text-white my-1">
              Add cargo insurance to your shipment to stay safe from any
              accidents.
            </p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setInspection(!inspection);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              inspection: !inspection,
            },
          });
        }}
        onMouseEnter={() => setInspectionInfo(true)}
        onMouseLeave={() => setInspectionInfo(false)}
        class={
          inspection
            ? "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl sm:ml-4 xl:ml-0 shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl sm:ml-4 xl:ml-0 shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={inspection}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/9QHXC2E.png" alt="" class="w-5 h-5" />
          <p class="font-sm font-sans font-light">Inspection Services</p>
        </div>
        {inspectionInfo ? (
          <div class=" absolute bottom-14 -left-12 max-w-lg text-sm md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p class="text-white my-1">
              Order an inspection or tally service by checking this one.
            </p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setCertification(!certification);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              certification: !certification,
            },
          });
        }}
        onMouseEnter={() => setCertificationInfo(true)}
        onMouseLeave={() => setCertificationInfo(false)}
        class={
          certification
            ? "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={certification}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/LJfHZAe.png" alt="" class="w-5 h-5" />
          <p class="font-sm font-sans font-light">Certification</p>
        </div>
        {certificationInfo ? (
          <div class=" absolute bottom-14 -left-16 max-w-lg text-sm md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p class="text-white my-1">
              For different types of commodities and specific local
              requirements,we will help you to get phytosanitary, radiology,
              veterinary and other types of certificates.
            </p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setCustoms(!customs);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              customs_clearance: !customs,
            },
          });
        }}
        onMouseEnter={() => setCustomsInfo(true)}
        onMouseLeave={() => setCustomsInfo(false)}
        class={
          customs
            ? "relative inline-flex items-center justify-between gap-4 mb-2 px-3 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "relative inline-flex items-center justify-between gap-4 mb-2 px-3 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={customs}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/0DXcRm5.png" alt="" class="w-5 h-5" />
          <p class="font-sm font-sans font-light">Customs Clearance</p>
        </div>
        {customsInfo ? (
          <div class=" absolute bottom-14 -left-12 max-w-lg text-sm md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p class="text-white my-1">
              Select this item if you need customs brokerage service.
            </p>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default AssociatedServices;
