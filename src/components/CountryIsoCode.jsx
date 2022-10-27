import React from "react";
import Data from "../utils/countries.json";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
console.log(Data);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CountryIsoCode = () => {
  const [selectedCountry, setSelectedCountry] = useState(Data[98]);
  return (
    <Listbox
      id="country_code"
      value={selectedCountry}
      onChange={(e) => {
        setSelectedCountry(e);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative w-1/4">
            <Listbox.Button className="relative w-[full] text-sm cursor-pointer bg-white py-2 pl-3 pr-2 text-left  focus:outline-none sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selectedCountry.flag}
                  alt=""
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="ml-3 block truncate">
                  {selectedCountry.dialCode}
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                id="countryscollbar"
                className="countryscollbar absolute z-10 mt-1 max-h-40 w-[220%] overflow-auto rounded-md bg-white py-1 -ml-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {Data.map((country) => (
                  <Listbox.Option
                    key={country.dialCode}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "relative cursor-pointer  select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={country.flag}
                            alt=""
                            className="h-6 w-6 flex-shrink-0"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {country.isoCode}
                          </span>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate pr-4"
                            )}
                          >
                            {country.dialCode}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <span className="pointer-events-none absolute inset-y-0 -right-3 ml-3 flex items-center">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 ml-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CountryIsoCode;
