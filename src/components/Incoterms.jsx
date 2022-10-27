import React, { useState } from "react";

const Incoterms = ({ formData, setFormData }) => {
  const [exw, setExw] = useState(false);
  const [fob, setFob] = useState(false);
  const [cfr, setCfr] = useState(false);
  const [cif, setCif] = useState(false);
  const [dap, setDap] = useState(false);
  const [ddp, setDdp] = useState(false);
  return (
    <div class="grid gap-2 mb-6 grid-cols-3 sm:grid-cols-3 sm:w-[75%] md:grid-cols-4 md:w-[80%] lg:grid-cols-6 xl:grid-cols-6 lg:w-full xl:w-full">
      <button
        type="button"
        onClick={() => {
          setExw(!exw);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: "EXW" });
        }}
        class={
          exw
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none focus:outline-none"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={exw}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">EXW</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(!fob);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: "FOB" });
        }}
        class={
          fob
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={fob}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">FOB</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(!cfr);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: "CFR" });
        }}
        class={
          cfr
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={cfr}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">CFR</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(!cif);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: "CIF" });
        }}
        class={
          cif
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={cif}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">CIF</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(!dap);
          setDdp(false);
          setFormData({ ...formData, incoterms: "DAP" });
        }}
        class={
          dap
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={dap}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">DAP</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(!ddp);
          setFormData({ ...formData, incoterms: "DDP" });
        }}
        class={
          ddp
            ? "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]"
            : "inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]"
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={ddp}
          value=""
          class="w-4 h-4 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div class="flex gap-1 justify-center items-center">
          <p class="font-sm font-sans font-light">DDP</p>
        </div>
      </button>
    </div>
  );
};

export default Incoterms;
