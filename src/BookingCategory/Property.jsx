import React, { useState } from "react";
import newspaper from "../assets/hinduimg.png";
import property from "../assets/property.png";
import news2 from "../assets/News2.jpg";
import newsPaper1 from "../assets/news1.png";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const cities = [
  {
    name: "Andhra Pradesh",
    price: "Rs. 660",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=ANPDH",
  },
  {
    name: "Central Kerala",
    price: "Rs. 170",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=CEKE",
  },
  {
    name: "Chennai",
    price: "Rs. 2,180",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=CHEN",
  },
  {
    name: "Coimbatore",
    price: "Rs. 670",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=COIM",
  },
  {
    name: "Delhi",
    price: "Rs. 300",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=DELH",
  },
  {
    name: "GR Hyderabad",
    price: "Rs. 500",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=GHYD",
  },
  {
    name: "Hyderabad",
    price: "Rs. 670",
    details:
      "/target?ci=PROP-MAIN&amp;at=AT_CLASSIFIED_TEXT&amp;pub=THPB&amp;edi=HYDB",
  },
];

const Property = () => {
  const [selectedAdType, setSelectedAdType] = useState("classifiedText");

  const handleAdTypeChange = (event) => {
    setSelectedAdType(event.target.value);
  };

  return (
    <div className="p-5">
      <div className="bg-[#000080] flex flex-row">
        <div className="w-[40%]">
          <img src={newspaper} alt="news paper" className="ml-[40%]" />
          <img src={property} alt="matri" className="ml-[40%]" />
        </div>
        <div className="w-[50%] font-bold text-white">
          <p className="text-white text-4xl">
            RECRUITMENTS AD IN THE HINDU NEWSPAPER
          </p>
          <p className="mt-3">
            The Hindu Recruitments Ad Booking Online for Newspapers. Get Your
            Recruitments Classified & Display Advertisements Published in the
            Print Edition at the Lowest Rates with Instant Release and Expert
            Customer Support.
          </p>
          <p className="mt-3">
            Newspaper Ads ➧ The Hindu Advertisement ➧ Matrimonial
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 bg-[#0ABF79] p-5">
        <div>
          <p className="text-2xl">The Hindu Matrimonial AC Contact</p>
          <p className="text-2xl text-white">Contact: +91- 8121003003</p>
        </div>
        <div className="flex flex-col ml-56">
          <p className="text-2xl">Email</p>
          <p className="text-white text-2xl">CustomerCare@ad2publish.com</p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 mt-2">
        <div>
          <h1 className="font-bold">Choose Ad Type</h1>
        </div>
        <RadioGroup
          row
          name="adType"
          value={selectedAdType}
          onChange={handleAdTypeChange}
        >
          <FormControlLabel
            value="classifiedText"
            control={<Radio />}
            label={
              <div className="flex flex-row items-center">
                <img src={newsPaper1} alt="news paper" />
                <p>Classified Text</p>
              </div>
            }
          />
          <FormControlLabel
            value="classifiedDisplay"
            control={<Radio />}
            label={
              <div className="flex flex-row items-center">
                <img src={news2} alt="news2" />
                <p>Classified Display</p>
              </div>
            }
          />
        </RadioGroup>
      </div>

      <div className="topcontent">
        {selectedAdType === "classifiedText" && (
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-xl font-bold">Book Ad by City:</h2>
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex bg-white rounded-lg shadow-md p-4 gap-5"
              >
                <div className="flex flex-col w-[200px]">
                  <p className="uppercase font-bold">{city.name}</p>
                  <p className="text-red-600">
                    {city.price} <em className="text-sm">/ 2 Lines</em>
                  </p>
                </div>
                <a
                  href={city.details}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Book
                </a>
              </div>
            ))}
          </div>
        )}
        {selectedAdType === "classifiedDisplay" && (
          <div className="text-center">
            <p className="text-xl font-bold">Classified Display Ad:</p>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>ANDHRA PRADESH</p>
                  <p className="text-red-500">Rs. 275 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>CENTRAL KERALA</p>
                  <p className="text-red-500">Rs. 90 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>CHENNAI</p>
                  <p className="text-red-500">Rs. 1,420 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>DELHI</p>
                  <p className="text-red-500">Rs. 160 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>ANDHRA PRADESH</p>
                  <p className="text-red-500">Rs. 275 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p>HYDERABAD</p>
                  <p className="text-red-500">Rs. 150 / Sq. Cm.</p>
                </div>
                <div>
                  <Button variant="contained">SELECT</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
  <h1>PROCESS TO BOOK PROPERTY SALE AD IN THE HINDU NEWSPAPER?</h1>

    <ol className="list-decimal list-inside">
      <li>Select a city or <strong className="font-bold">Property Ad Package</strong> to post in The Hindu newspaper.</li>
      <li>Choose the <strong className="font-bold">Date of Publishing</strong> for your Real Estate Ad in The Hindu.</li>
      <li><strong className="font-bold">Draft your Property Sale Ad</strong> referring to Ad Samples.</li>
      <li><strong className="font-bold">Review your Property for Sale Ad Booking</strong> and register to make payment for The Hindu newspaper.</li>
      <li>To confirm your <strong className="font-bold">The Hindu Property Classified Ad Booking</strong>, proceed with online or offline payment options.</li>
    </ol>
 


      </div>
    </div>
  );
};

export default Property;
