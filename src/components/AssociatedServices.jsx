import React, { useState } from "react";

const AssociatedServices = () => {
  const [insurance, setInsurance] = useState(false);
  const [inspection, setInspection] = useState(false);
  const [certification, setCertification] = useState(false);
  const [customs, setCustoms] = useState(false);
  return (
    <div class="flex items-center gap-2 mb-6 sm:w-[100%] md:w-[120%] lg:w-[140%] flex-wrap">
      <button
        type="button"
        onClick={() => setInsurance(!insurance)}
        class={
          insurance
            ? "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
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
      </button>
      <button
        type="button"
        onClick={() => setInspection(!inspection)}
        class={
          inspection
            ? "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
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
      </button>
      <button
        type="button"
        onClick={() => setCertification(!certification)}
        class={
          certification
            ? "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
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
      </button>
      <button
        type="button"
        onClick={() => setCustoms(!customs)}
        class={
          customs
            ? "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-4 mb-2 px-6 py-2.5 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
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
      </button>
    </div>
  );
};

export default AssociatedServices;
