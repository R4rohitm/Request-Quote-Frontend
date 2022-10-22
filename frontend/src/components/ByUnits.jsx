import React, { useState } from "react";

const ByUnits = ({ setFormData, formData }) => {
  const [noOfComponents, setNoOfComponents] = useState([1]);
  const [dimensionsArray, setDimensionsArray] = useState([]);
  const [anotherArray, setAnotherArray] = useState([]);
  const [dimensions, setDimensions] = useState({});

  const handleRemoveComponent = (index) => {
    const list = [...anotherArray];
    list.splice(index, 1);
    setDimensionsArray(list);
    setFormData({
      ...formData,
      dimensions: [...list],
    });
    const remove = [...noOfComponents];
    remove.splice(index, 1);
    setNoOfComponents(remove);
  };
  return (
    <div>
      {noOfComponents.map((component, index) => {
        return (
          <div key={component} class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="dimensions"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dimensions
              </label>
              <div class="border flex space-between items-center rounded-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
                <input
                  type="text"
                  name="width"
                  onChange={(e) => {
                    setDimensions({ ...dimensions, width: e.target.value });
                  }}
                  class="  text-gray-900 text-md outline-none block w-[25%] p-[9px] placeholder:text-center indent-2"
                  placeholder="width"
                />{" "}
                ×
                <input
                  type="text"
                  name="height"
                  onChange={(e) => {
                    setDimensions({ ...dimensions, height: e.target.value });
                  }}
                  class=" text-gray-900 text-md outline-none block w-[25%] p-[9px] placeholder:text-center indent-2"
                  placeholder="height"
                />{" "}
                ×
                <input
                  type="text"
                  name="length"
                  onChange={(e) => {
                    setDimensions({ ...dimensions, length: e.target.value });
                  }}
                  class=" text-gray-900 text-md outline-none block w-[25%] p-[9px]  placeholder:text-center indent-2"
                  placeholder="length"
                />
                <div class="w-[15%] flex justify-center items-center text-lg border-l-2">
                  m
                </div>
              </div>
            </div>
            <div class="grid relative gap-6 grid-cols-5 sm:grid-cols-5 lg:grid-cols-7 items-center">
              <div class="col-span-2 lg:col-span-3">
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  onChange={(e) => {
                    setDimensions({ ...dimensions, quantity: e.target.value });
                  }}
                  class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                  placeholder="Quantity"
                />
              </div>
              <div class="col-span-2 lg:col-span-3">
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Gross Weight
                </label>
                <input
                  type="text"
                  name="gross_weight"
                  onKeyUp={(e) => {
                    setDimensions({
                      ...dimensions,
                      gross_weight: e.target.value,
                    });
                    setDimensionsArray((prev) => [
                      ...prev,
                      { ...dimensions, gross_weight: e.target.value },
                    ]);
                  }}
                  onBlur={() => {
                    setFormData({
                      ...formData,
                      dimensions: [
                        ...formData.dimensions,
                        dimensionsArray[dimensionsArray.length - 1],
                      ],
                    });
                    setAnotherArray([...formData.dimensions]);
                  }}
                  class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                  placeholder="Gross Weight"
                />
              </div>
              {noOfComponents.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveComponent(index)}
                  class="text-[#4F46E5] absolute right-0 col-span-1  flex justify-center items-center bg-white hover:bg-[#4F46E5] hover:text-white focus:ring-4 focus:outline-none font-medium text-sm rounded-lg w-6 h-6 sm:w-6 sm:h-6  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 sm:w-4 sm:h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              )}
            </div>
            {noOfComponents.length - 1 === index && (
              <button
                type="button"
                onClick={() => {
                  setNoOfComponents((prev) => [...prev, noOfComponents + 1]);
                }}
                class="text-[#4F46E5] bg-white hover:bg-[#4F46E5] hover:text-white focus:ring-4 focus:outline-none font-medium text-sm w-16 rounded-lg sm:w-16 px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ByUnits;
