import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ByUnits from "./ByUnits";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const transportation = [
  {
    id: 1,
    transportation_by: "Full Container Load (FCL)",
    abbreviation: "FCL",
    icon: "https://cdn-icons-png.flaticon.com/512/5340/5340887.png",
  },
  {
    id: 2,
    transportation_by: "Less than Container Load (LCL)",
    abbreviation: "LCL",
    icon: "https://cdn-icons-png.flaticon.com/512/3045/3045754.png",
  },
  {
    id: 3,
    transportation_by: "Bulk",
    abbreviation: "Bulk",
    icon: "https://cdn-icons-png.flaticon.com/512/2821/2821826.png",
  },
];

const container_type = [
  { id: 1, container_type: "20' Standard" },
  { id: 2, container_type: "40' Standard" },
  { id: 3, container_type: "40' High-Cube" },
  { id: 4, container_type: "20' Refrigerated" },
  { id: 5, container_type: "40' Refrigerated" },
  { id: 6, container_type: "20' Open Top" },
  { id: 7, container_type: "40' Open Top" },
  { id: 8, container_type: "20' Flatrack" },
  { id: 9, container_type: "40' Flatrack" },
  { id: 10, container_type: "20' Tank" },
  { id: 11, container_type: "40' Flatrack Collapsible" },
  { id: 12, container_type: "20' Flatrack Collapsible" },
  { id: 13, container_type: "20' Platform" },
  { id: 14, container_type: "40' Platform" },
  { id: 15, container_type: "20' Bulk" },
  { id: 16, container_type: "45' High Cube" },
  { id: 17, container_type: "10' Standard" },
  { id: 18, container_type: "N/A" },
];

const shiptypes = [
  { id: 1, shiptype: "Bulk Careers" },
  { id: 2, shiptype: "Containerships" },
  { id: 3, shiptype: "General cargo" },
  { id: 4, shiptype: "Product tankers/Asphalt carriers" },
  { id: 5, shiptype: "Product tankers/Chemical tankers" },
  { id: 6, shiptype: "Product tankers/Crude carriers" },
  { id: 7, shiptype: "Product tankers/Gas carriers" },
  { id: 8, shiptype: "Specialized/Heavy-lift" },
  { id: 9, shiptype: "Specialized/Livestock" },
  { id: 10, shiptype: "Specialized/Refrigerated" },
  { id: 11, shiptype: "Specialized/RoRo" },
  { id: 12, shiptype: "Specialized/Wood chip" },
  { id: 13, shiptype: "N/A" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sea({ setFormData, formData, handleChange }) {
  const [selected, setSelected] = useState(transportation[0]);
  const [selectedContainer, setSelectedContainer] = useState(container_type[0]);
  const [selectedShipType, setSelectedShipType] = useState(shiptypes[0]);
  const [byUnits, setByUnits] = useState(false);

  return (
    <>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <Listbox
          id="transportation_by"
          value={selected}
          onChange={(e) => {
            console.log(e);
            setSelected(e);
            setFormData({
              ...formData,
              transportation_by: e.abbreviation,
            });
          }}
        >
          {({ open }) => (
            <div class="flex flex-col">
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Transportation By<span class="text-[red]">*</span>
              </label>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <img
                      src={selected.icon}
                      alt=""
                      className="h-6 w-6 flex-shrink-0 rounded-full"
                    />
                    <span className="ml-3 block truncate">
                      {selected.transportation_by}
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
                    {transportation.map((way) => (
                      <Listbox.Option
                        key={way.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={way}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <img
                                src={way.icon}
                                alt=""
                                className="h-6 w-6 flex-shrink-0 rounded-full"
                              />
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {way.transportation_by}
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
      </div>
      {selected.id === 1 ? (
        <div class="grid gap-6 mb-8 md:grid-cols-2">
          <Listbox
            value={selectedContainer}
            onChange={(e) => {
              setSelectedContainer(e);
              setFormData({
                ...formData,
                container_type: e.container_type,
              });
            }}
          >
            {({ open }) => (
              <div class="flex flex-col">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Container Type<span class="text-[red]">*</span>
                </label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selectedContainer.container_type}
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
                      {container_type.map((type) => (
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
                          {({ selectedContainer, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selectedContainer
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {type.container_type}
                                </span>
                              </div>

                              {selectedContainer ? (
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
          <div>
            <label
              for="Quanity of Containers"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Quantity of Containers <span class="text-[red]">*</span>
            </label>
            <input
              type="number"
              name="containers_quantity"
              onChange={(e) => handleChange(e)}
              class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="0"
              required
            />
          </div>
        </div>
      ) : selected.id === 2 ? (
        <div>
          <div class="mb-5">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              value=""
              name="bordered-checkbox"
              onChange={() => {
                setByUnits(!byUnits);
                setFormData({ ...formData, by_units: !byUnits });
              }}
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-checkbox-1"
              class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              By Units
            </label>
          </div>

          <div>
            {byUnits ? (
              <ByUnits formData={formData} setFormData={setFormData} />
            ) : (
              <div class="grid gap-6 mb-8 md:grid-cols-2">
                {" "}
                <div>
                  <label
                    for="weight"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Weight <span class="text-[red]">*</span>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    onChange={(e) => handleChange(e)}
                    class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label
                    for="volume"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Volume <span class="text-[red]">*</span>
                  </label>
                  <input
                    type="number"
                    name="volume"
                    onChange={(e) => handleChange(e)}
                    class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                    placeholder="0"
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div class="grid gap-6 mb-8 md:grid-cols-2">
            <Listbox
              value={selectedShipType}
              onChange={(e) => {
                setSelectedShipType(e);
                setFormData({
                  ...formData,
                  ship_type: e.shiptype,
                });
              }}
            >
              {({ open }) => (
                <div class="flex flex-col">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ship Type
                  </label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selectedShipType.shiptype}
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
                        {shiptypes.map((type) => (
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
                            {({ selectedShipType, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selectedShipType
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {type.shiptype}
                                  </span>
                                </div>

                                {selectedShipType ? (
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
            <div>
              <label
                for="Gross Weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gross Weight <span class="text-[red]">*</span>
              </label>
              <input
                type="number"
                name="gross_weight"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                required
              />
            </div>
          </div>
          <div class="grid gap-6 mb-8 md:grid-cols-2">
            <div>
              <label
                for="Gross Weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Loading Rate
              </label>
              <input
                type="number"
                name="loading_rate"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              />
            </div>
            <div>
              <label
                for="Discharging Rate"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Discharging Rate
              </label>
              <input
                type="number"
                name="discharging_rate"
                onChange={(e) => handleChange(e)}
                class="bg-white rounded-sm border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
