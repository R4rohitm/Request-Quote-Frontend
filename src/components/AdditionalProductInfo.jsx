import React from "react";

const AdditionalProductInfo = () => {
  return (
    <div class="mt-10 px-5">
      <button
        type="button"
        class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-base font-thin text-center text-gray-500 border border-orange rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#f12711] via-[#c99118] to-[#f5af19]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>

        <span class="relative font-thin">Hazardous Cargo</span>
      </button>

      <button
        type="button"
        class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-base font-thin text-center text-gray-500 border border-orange rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#c0c0aa] via-[#32dbe8] to-[#1cefff]"
      >
        <svg
          class="svg-icon w-5 h-5"
          viewBox="0 0 20 20"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            fill="none"
            d="M10.867,12.751V7.4c0-0.478-0.388-0.866-0.866-0.866S9.134,6.923,9.134,7.4v5.351c-1.008,0.357-1.733,1.316-1.733,2.448c0,1.436,1.164,2.599,2.6,2.599c1.435,0,2.599-1.163,2.599-2.599C12.6,14.067,11.876,13.108,10.867,12.751 M12.6,11.739V3.068c0-1.436-1.164-2.6-2.599-2.6c-1.436,0-2.6,1.164-2.6,2.6v8.671c-1.05,0.79-1.733,2.044-1.733,3.46c0,2.393,1.939,4.332,4.333,4.332c2.392,0,4.333-1.939,4.333-4.332C14.333,13.783,13.65,12.529,12.6,11.739 M10,18.665c-1.914,0-3.466-1.552-3.466-3.466c0-1.282,0.698-2.399,1.733-2.999V3.068c0-0.957,0.776-1.733,1.733-1.733s1.733,0.776,1.733,1.733V12.2c1.035,0.6,1.732,1.717,1.732,2.999C13.466,17.113,11.914,18.665,10,18.665"
          ></path>
        </svg>

        <span class="relative font-thin">Perishable Cargo</span>
      </button>
    </div>
  );
};

export default AdditionalProductInfo;
