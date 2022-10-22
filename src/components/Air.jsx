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
    transportation_by: "Standard Cargo",
    abbreviation: "SC",
    icon: "https://cdn-icons-png.flaticon.com/512/1061/1061198.png",
  },
  {
    id: 2,
    transportation_by: "ULD Container",
    abbreviation: "ULDC",
    icon: "https://cdn-icons-png.flaticon.com/512/1358/1358770.png",
  },
];

const container_type = [
  { id: 1, container_type: "Demi" },
  { id: 2, container_type: "HMA Stall" },
  { id: 3, container_type: "LD-1" },
  { id: 4, container_type: "LD-11" },
  { id: 5, container_type: "LD-2" },
  { id: 6, container_type: "LD-26" },
  { id: 7, container_type: "LD-29" },
  { id: 8, container_type: "LD-29 Reefer" },
  { id: 9, container_type: "LD-3" },
  { id: 10, container_type: "LD-3 Reefer" },
  { id: 11, container_type: "LD-39" },
  { id: 12, container_type: "LD-4" },
  { id: 13, container_type: "LD-6" },
  { id: 14, container_type: "LD-7" },
  { id: 15, container_type: "LD-7 with Angled Wings" },
  { id: 16, container_type: "LD-7 with Folding Wings" },
  { id: 17, container_type: "LD-8" },
  { id: 18, container_type: "LD-9" },
  { id: 19, container_type: "LD-9 Reefer" },
  { id: 20, container_type: "M-1" },
  { id: 21, container_type: "M-1H" },
  { id: 22, container_type: "M-2" },
  { id: 23, container_type: "M-6" },
  { id: 24, container_type: "M-6 (118H)" },
  { id: 25, container_type: "M-6 Twin Car Rack" },
  { id: 26, container_type: "MDP" },
  { id: 27, container_type: "PLA Half Pallet" },
  { id: 28, container_type: "PNP/P6P Pallet" },
  { id: 29, container_type: "PNA Half Pallet" },
  { id: 30, container_type: "Type A Pen" },
  { id: 31, container_type: "N/A" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Air({ setFormData, formData, handleChange }) {
  const [selected, setSelected] = useState(transportation[0]);
  const [selectedContainer, setSelectedContainer] = useState(container_type[0]);
  const [byUnits, setByUnits] = useState(false);

  return (
    <>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <Listbox
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
              for="Quantity of Containers"
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
      )}
    </>
  );
}
