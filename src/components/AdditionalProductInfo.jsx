import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const imo_class = [
  { id: 1, imoclass: "1.1 Explosives with a mass explosion hazard" },
  { id: 2, imoclass: "1.2 Explosives with a severe projection hazard" },
  { id: 3, imoclass: "1.3 Explosives with a fire" },
  { id: 4, imoclass: "1.4 Minor fire or projection hazard" },
  {
    id: 5,
    imoclass: "1.5 An insensitive substance with a mass explosion hazard",
  },
  { id: 6, imoclass: "1.6 Extremely insensitive articles" },
  { id: 7, imoclass: "2.1 Flammable gas" },
  { id: 8, imoclass: "2.2 Non-flammable, Non-poisoned Gas" },
  { id: 9, imoclass: "2.3 Oxygen Gas" },
  { id: 10, imoclass: "2.4 Poison Gas" },
  { id: 11, imoclass: "3 Flammable liquid" },
  { id: 12, imoclass: "4.1 Flammable solids or Substances" },
  { id: 13, imoclass: "4.2 Flammable solids" },
  {
    id: 14,
    imoclass: "4.3 Substances which, in contact with water, emit flammable gas",
  },
  {
    id: 15,
    imoclass:
      "5.1 Oxidizing substances (agents) by yielding oxygen increase the risk and intensity of fire",
  },
  {
    id: 16,
    imoclass:
      "5.2 Organic peroxides- most will burn rapidly and are sensitive to impact or friction",
  },
  { id: 17, imoclass: "6.1 Toxic substances" },
  { id: 18, imoclass: "6.2 Infectious substances" },
  { id: 19, imoclass: "7 Radioactive substances" },
  { id: 20, imoclass: "8 Corrosives" },
  { id: 21, imoclass: "9 Miscellaneous dangerous substances and articles" },
  { id: 22, imoclass: "N/A" },
];

const temptype = [
  { id: 1, type: "°C" },
  { id: 2, type: "°F" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdditionalProductInfo = ({ setFormData, formData, handleChange }) => {
  const [hazardousCargo, setHazardousCargo] = useState(false);
  const [selected, setSelected] = useState(imo_class[0]);
  const [perishableCargo, setPerishableCargo] = useState(false);
  const [selectedTempType, setSelectedTempType] = useState(temptype[0]);
  const [oversizedCargo, setOversizedCargo] = useState(false);
  const [liquidCargo, setLiquidCargo] = useState(false);

  //   Component
  return (
    <>
      <div class="mt-10 px-2 grid grid-cols-2 gap-3 mb-6 md:grid-cols-4 sm:grid-cols-2 flex-wrap">
        <button
          onClick={() => {
            setHazardousCargo(!hazardousCargo);
            setPerishableCargo(false);
            setOversizedCargo(false);
            setLiquidCargo(false);
            setFormData({
              ...formData,
              product_details: {
                ...formData.product_details,
                hazardous_cargo: {
                  ...formData.product_details.hazardous_cargo,
                  isTrue: !hazardousCargo,
                },
                perishable_cargo: {},
                oversized_cargo: {},
                liquid_cargo: {},
              },
            });
          }}
          type="button"
          title="Hazardous Cargo"
          className={
            hazardousCargo
              ? "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#f12711] via-[#c99118] to-[#f5af19] border-[1px] border-[#c99118]"
              : "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 border  rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#f12711] via-[#c99118] to-[#f5af19]"
          }
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

          <span class="relative font-thin truncate">Hazardous Cargo</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setHazardousCargo(false);
            setPerishableCargo(!perishableCargo);
            setOversizedCargo(false);
            setLiquidCargo(false);
            setFormData({
              ...formData,
              product_details: {
                ...formData.product_details,
                perishable_cargo: {
                  ...formData.product_details.perishable_cargo,
                  isTrue: !perishableCargo,
                },
                hazardous_cargo: {},
                oversized_cargo: {},
                liquid_cargo: {},
              },
            });
          }}
          title="Perishable Cargo"
          className={
            perishableCargo
              ? "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#c0c0aa] via-[#32dbe8] to-[#1cefff] border-[1px] border-[#32dbe8]"
              : "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 border  rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#c0c0aa] via-[#32dbe8] to-[#1cefff]"
          }
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

          <span class="relative font-thin truncate">Perishable Cargo</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setHazardousCargo(false);
            setPerishableCargo(false);
            setOversizedCargo(!oversizedCargo);
            setLiquidCargo(false);
            setFormData({
              ...formData,
              product_details: {
                ...formData.product_details,
                oversized_cargo: {
                  ...formData.product_details.oversized_cargo,
                  isTrue: !oversizedCargo,
                },
                hazardous_cargo: {},
                perishable_cargo: {},
                liquid_cargo: {},
              },
            });
          }}
          title="Oversized Cargo"
          className={
            oversizedCargo
              ? "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#0f0c29] via-[#342e79] to-[#302b63] border-[1px] border-[#342e79]"
              : "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 border  rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#0f0c29] via-[#342e79] to-[#302b63]"
          }
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
              d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
            />
          </svg>

          <span class="relative font-thin truncate">Oversized Cargo</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setHazardousCargo(false);
            setPerishableCargo(false);
            setOversizedCargo(false);
            setLiquidCargo(!liquidCargo);
            setFormData({
              ...formData,
              product_details: {
                ...formData.product_details,
                liquid_cargo: {
                  ...formData.product_details.liquid_cargo,
                  isTrue: !liquidCargo,
                },
                hazardous_cargo: {},
                perishable_cargo: {},
                oversized_cargo: {},
              },
            });
          }}
          title="Liquid Cargo"
          className={
            liquidCargo
              ? "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#1CD8D2] via-[#77dfb3] to-[#93EDC7] border-[1px] border-[#77dfb3]"
              : "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-thin text-center text-gray-500 border  rounded-full shadow-2xl  cursor-pointer hover:text-white bg-white hover:bg-gradient-to-br from-[#1CD8D2] via-[#77dfb3] to-[#93EDC7]"
          }
        >
          <svg
            class="svg-icon w-5 h-5"
            viewBox="0 0 20 20"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              fill="none"
              d="M10,16.513c-2.249,0-4.071-1.822-4.071-4.07c0-0.226-0.182-0.407-0.407-0.407c-0.225,0-0.407,0.182-0.407,0.407c0,2.697,2.187,4.885,4.885,4.885c0.225,0,0.407-0.183,0.407-0.407S10.225,16.513,10,16.513M10,1.044c-0.814,0-6.513,6.92-6.513,11.398c0,3.597,2.916,6.513,6.513,6.513c3.597,0,6.513-2.916,6.513-6.513C16.513,7.964,10.813,1.044,10,1.044 M10,18.141c-3.148,0-5.699-2.65-5.699-5.92C4.301,8.372,9.593,2.011,10,2.011c0.407,0,5.698,6.36,5.698,10.209C15.698,15.49,13.147,18.141,10,18.141"
            ></path>
          </svg>

          <span class="relative font-thin truncate text-sm">Liquid Cargo</span>
        </button>
      </div>
      {hazardousCargo ? (
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <Listbox
            id="transportation_by"
            value={selected}
            onChange={(e) => {
              setSelected(e);
              setFormData({
                ...formData,
                product_details: {
                  ...formData.product_details,
                  hazardous_cargo: {
                    ...formData.product_details.hazardous_cargo,
                    imo_class: e.imoclass,
                  },
                },
              });
            }}
            class="w-[81%] sm:w-full"
          >
            {({ open }) => (
              <div class="flex flex-col">
                <label
                  for="imo_class"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Imo Class<span class="text-[red]">*</span>
                </label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2.5 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.imoclass}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {imo_class.map((imoclass) => (
                        <Listbox.Option
                          key={imoclass.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={imoclass}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {imoclass.imoclass}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            )}
          </Listbox>
          <div class="w-[81%] sm:w-full">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              UN Number <span class="text-[red]">*</span>
            </label>
            <input
              type="number"
              name="un_number"
              class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="0"
              required
              onInvalid={(F) => {
                F.target.setCustomValidity("Enter valid Un Number.");
                F.target.style.border = "1px solid red";
              }}
              onInput={(F) => {
                F.target.setCustomValidity("");
                F.target.style.border = "none";
              }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  product_details: {
                    ...formData.product_details,
                    hazardous_cargo: {
                      ...formData.product_details.hazardous_cargo,
                      un_number: e.target.value,
                    },
                  },
                });
              }}
            />
          </div>
        </div>
      ) : null}

      {/* Perishable Cargo Component */}
      {perishableCargo ? (
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Temperature Regime
            </label>
            <div class="border flex space-between items-center rounded-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
              <input
                type="number"
                name="temperature_regime"
                class="bg-white text-gray-900 text-sm outline-none block p-[9px] w-full"
                placeholder="0"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    product_details: {
                      ...formData.product_details,
                      perishable_cargo: {
                        ...formData.product_details.perishable_cargo,
                        temperature: e.target.value,
                      },
                    },
                  });
                }}
              />
              <Listbox
                value={selectedTempType.type}
                onChange={(e) => {
                  setSelectedTempType(e);
                  setFormData({
                    ...formData,
                    product_details: {
                      ...formData.product_details,
                      perishable_cargo: {
                        ...formData.product_details.perishable_cargo,
                        type: e.type,
                      },
                    },
                  });
                }}
              >
                {({ open }) => (
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default border-l-[1px]  border-gray-300 bg-white py-2.5 pl-3 pr-10 text-left shadow-sm focus:outline-none sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selectedTempType.type}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {temptype.map((type) => (
                          <Listbox.Option
                            key={type.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={type}
                          >
                            {({ selectedTempType, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selectedTempType
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {type.type}
                                  </span>
                                </div>

                                {selectedTempType ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      ) : null}
      {oversizedCargo ? (
        <div class="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              for="length"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Length
            </label>
            <div class="border flex space-between items-center rounded-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
              <input
                type="text"
                autoComplete="off"
                class="bg-white text-gray-900 text-sm block w-[80%] p-2.5 outline-none focus:outline-none"
                placeholder="0"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    product_details: {
                      ...formData.product_details,
                      oversized_cargo: {
                        ...formData.product_details.oversized_cargo,
                        length: e.target.value,
                      },
                    },
                  });
                }}
              />
              <div class="flex justify-center items-center border-l-2 w-[20%] text-md text-gray-500 font-thin">
                m
              </div>
            </div>
          </div>
          <div>
            <label
              for="width"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Width
            </label>
            <div class="border flex space-between items-center rounded-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
              <input
                type="text"
                autoComplete="off"
                class="bg-white text-gray-900 text-sm block w-[80%] p-2.5 outline-none focus:outline-none"
                placeholder="0"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    product_details: {
                      ...formData.product_details,
                      oversized_cargo: {
                        ...formData.product_details.oversized_cargo,
                        width: e.target.value,
                      },
                    },
                  });
                }}
              />
              <div class="flex justify-center items-center border-l-2 w-[20%] text-md text-gray-500 font-thin">
                m
              </div>
            </div>
          </div>
          <div>
            <label
              for="height"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Height
            </label>
            <div class="border flex space-between items-center rounded-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
              <input
                type="text"
                autoComplete="off"
                class="bg-white text-gray-900 text-sm block w-[80%] p-2.5 outline-none focus:outline-none"
                placeholder="0"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    product_details: {
                      ...formData.product_details,
                      oversized_cargo: {
                        ...formData.product_details.oversized_cargo,
                        height: e.target.value,
                      },
                    },
                  });
                }}
              />
              <div class="flex justify-center items-center border-l-2 w-[20%] text-md text-gray-500 font-thin">
                m
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AdditionalProductInfo;
