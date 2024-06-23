import React, { useState } from "react";
import CustomInput from "../../../../Components/CustomInput";
import { countryNames } from "@/constants/countryNames.constant";

const AddNewShippingInputSection = ({
  onNewAddressChange,
}: {
  onNewAddressChange: (newAddress: any) => void;
}) => {
  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    zipCode: "",
    companyName: "",
    streetAddress: "",
    country: "",
    isDefault: false,
  });

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const updatedAddress = {
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    };
    setNewAddress(updatedAddress);
    onNewAddressChange(updatedAddress);
  };

  return (
    <form>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          value={newAddress.firstName}
          onChange={handleInputChange}
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          value={newAddress.lastName}
          onChange={handleInputChange}
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          value={newAddress.phoneNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="country" className="text-black-50">
          Select Country
          <select
            name="country"
            id="country"
            className="w-full border border-black-10 text-black-80 px-3.5 py-2.5 mt-2 focus:outline-none focus:border-fuchsia-800 rounded-md"
            value={newAddress.country}
            onChange={handleInputChange}
          >
            {countryNames?.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <CustomInput
          label="State"
          type="text"
          name="state"
          placeholder="California"
          value={newAddress.state}
          onChange={handleInputChange}
        />

        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          value={newAddress.zipCode}
          onChange={handleInputChange}
        />

        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newAddress.companyName}
          onChange={handleInputChange}
        />
        <CustomInput
          label="Street Address"
          type="text"
          name="streetAddress"
          placeholder="1234 Main St"
          value={newAddress.streetAddress}
          onChange={handleInputChange}
        />
      </div>

      <div className="my-2">
        <label
          htmlFor="saveAsDefault"
          className="flex items-center justify-start gap-2"
        >
          <input
            className="h-4 w-4"
            type="checkbox"
            name="isDefault"
            checked={newAddress.isDefault}
            onChange={handleInputChange}
          />
          Save as default shipping address
        </label>
      </div>
    </form>
  );
};

export default AddNewShippingInputSection;
