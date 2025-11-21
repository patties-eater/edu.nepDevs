import { useState } from "react";
import countryData from "./countryData";

export default function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phone, setPhone] = useState(countryData[0].dial + " ");

 const handleCountryChange = (code) => {
  const newCountry = countryData.find((c) => c.code === code);

  // Remove ANY previous dial code at the beginning
  const cleanedNumber = phone.replace(/^\+\d+\s?/, "");

  // Add new dial code cleanly
  const updated = newCountry.dial + " " + cleanedNumber;

  setSelectedCountry(newCountry);
  setPhone(updated);


  };

  return (
    <div>
      <label
        htmlFor="phone-number"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Phone number
      </label>

      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-0 flex items-center w-32 pl-4">
          <select
            className="w-full bg-transparent pr-2 text-gray-600 text-sm"
            value={selectedCountry.code}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {countryData.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>

          <span className="text-gray-300 ml-1">|</span>
        </div>

        <input
          type="tel"
          id="phone-number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full rounded-md border-0 pl-40 pr-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
        />
      </div>
    </div>
  );
}
