import React, { useState } from "react";
import newspaper from "../assets/hinduimg.png";
import marrimonial from "../assets/matrimonial-img.png";
import newsPaper1 from "../assets/news1.png";
import { Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import news2 from "../assets/News2.jpg";
import Matrimonialinside from "../BookingCategory/Matrimonialinside";
import phone from '../assets/phone.jpg'
import email from "../assets/email-icon.jpg";

const Matrimonial = () => {
  const [selectedAdType, setSelectedAdType] = useState("");

  const handleAdTypeChange = (event) => {
    setSelectedAdType(event.target.value);
  };

  return (
    <div className=" lg:p-5 sl:p-4">
      <div className="bg-[#000080] lg:flex lg:flex-row sl:flex sl:flex-col">
        <div className=" lg:w-[40%] sl:w-[60%] sl:mt-2 sl:text-center  sl:justify-center ">
          <img src={newspaper} alt="news paper" className="ml-[40%]" />
          <img src={marrimonial} alt="matri" className="ml-[40%]" />
        </div>
        <div className=" lg:w-[50%] sl:w-full font-bold text-white sl:p-4">
          <p className="text-white   sl:text-base lg:text-4xl sl:justify-center sl:items-center ">
            MATRIMONIAL AD IN THE HINDU NEWSPAPER
          </p>
          <p className="mt-3 sl:flex sl:justify-center sl:items-center">
            Book The Hindu Matrimonial Ad at lowest cost and enjoy up to 50% off
            on Newspaper Ad online booking. Follow few simple steps and get
            Wanted Bride & Groom Ad published in Sunday The Hindu Matrimonial
            Classifieds section.
          </p>
          <p className="mt-3 sl:text-sm">
            Newspaper Ads ➧ The Hindu Advertisement ➧ Matrimonial
          </p>
        </div>
      </div>

      <div className="flex sl:hidden lg:block flex-row gap-5 bg-[#0ABF79] p-5">
        <div>
          <p className="text-2xl">The Hindu Matrimonial AC Contact</p>
          <p className="text-2xl text-white">Contact: +91- 8121003003</p>
        </div>
        <div className="flex flex-col ml-56">
          <p className="text-2xl">Email</p>
          <p className="text-white text-2xl">CustomerCare@ad2publish.com</p>
        </div>
      </div>


      <div className=" mt-4 sl:block lg:hidden">

<div  className=" sl:flex sl:flex-row gap-5 bg-green-500  ">
    <div>
      <img src={phone} alt="phone"/>
    </div>
    <div>
      <p className="text-white">Need Help Call!</p>
      <p className="text-white">Phone:+91 8182883733</p>
    </div>
  </div>
  <div  className="flex flex-row gap-5 mt-1 bg-green-500">
    <div>
      <img src={email} alt="email"/>
    </div>
    <div>
      <p className="text-white">Email</p>
      <p className="text-white">Customarecare@gmail.com</p>
    </div>
  
  </div>
</div> 

      <div className=" lg:flex lg:flex-row sl:flex sl:flex-col justify-center items-center gap-5 mt-2 ">
        <div>
          <h1 className="font-bold text-[#000080]">Choose Ad Type</h1>
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

      {selectedAdType === "classifiedText" && (
        <div>
          <p className=" lg:text-2xl sl:text-sm font-bold  text-[#000080]">BOOK AD BY CHOOSING A MATRIMONIAL PACKAGE :</p>

          <p className="font-bold">Hindu Matrimonial - All Editions</p>
          <div className=" lg:flex lg:flex-row lg:w-[50%] lg:gap-5 sl:flex sl:flex-row sl:gap-4">
            <div className="font-normal">
              Matrimonial ad publish in{" "}
              <span className="text-red-800">
                Hindu Tamil Nadu, Kerala, Andhra Pradesh, Karnataka & Delhi
                newspapers
              </span>{" "}
              Cost:{" "}
              <span className="text-red-600">Rs.1,575.00 for 2 Lines</span>
            </div>
            <div>
              <Button variant="contained">SELECT</Button>
            </div>
          </div>

          <p className="font-bold">Hindu Matrimonial ad (English + Tamil)</p>
          <div className="lg:flex lg:flex-row lg:w-[50%] lg:gap-5 sl:flex sl:flex-row sl:gap-4">
            <div>
              <p>
                Matrimonial ad publish in Hindu (English) & Hindu Tamil (Tamil)
                newspapers in All Edition. Cost: Rs. 1,875.00 for 2 Lines
              </p>
            </div>
            <div>
              <Button variant="contained">SELECT</Button>
            </div>
          </div>

          <p className="font-bold">Hindu Matrimonial 2 Ads Package</p>
          <div className="lg:flex lg:flex-row lg:w-[50%] lg:gap-5 sl:flex sl:flex-row sl:gap-4">
            <div>
              <p>
                Matrimonial ad publish in Hindu All Edition newspapers on
                Consecutive 2 Sundays. (Select One Sunday Date & Ad will be
                published on 2 Consecutive Sundays). Cost: Rs. 1,970.00 for 2
                Lines
              </p>
            </div>
            <div>
              <Button variant="contained">SELECT</Button>
            </div>
          </div>

          <p className="font-bold">Hindu Matrimonial 4 Ads Package</p>
          <div className="lg:flex lg:flex-row lg:w-[50%] lg:gap-5 sl:flex sl:flex-row sl:gap-4">
            <div>
              <p>
                Matrimonial ad publish in Hindu All Edition newspapers on
                consecutive 4 Sundays. (Select One Sunday Date & Ad will be
                published on 4 Consecutive Sundays). Cost: Rs. 2,600.00 for 2
                Lines
              </p>
            </div>
            <div>
              <Button variant="contained">SELECT</Button>
            </div>
          </div>

          <p className="font-bold">The Hindu - Marriage Bureau Advertisements</p>
          <div className="lg:flex lg:flex-row lg:w-[50%] lg:gap-5 sl:flex sl:flex-row sl:gap-4">
            <div>
              <p>
                Best for Marriage Bureau Includes: Hindu - Tamil Nadu, Kerala,
                Andhra Pradesh, Karnataka & Delhi. Cost: Rs. 2,750.00 for 2
                Lines
              </p>
            </div>
            <div>
              <Button variant="contained">SELECT</Button>
            </div>
          </div>
        </div>
      )}

      {selectedAdType === "classifiedDisplay" && (
        <div>
          <div>
            <p>
              No Editions are available for The Hindu Matrimonial Advertisement
            </p>
          </div>
          <div>
            <h2>
              BOOK MATRIMONIAL AD IN THE HINDU THROUGH TWO EFFECTIVE AD FORMATS:
            </h2>
          </div>

          <div>
            <p>
              Classified Text Ads: Our most cost-effective option. Your
              Matrimonial ad will appear in simple running text format with
              optional enhancements like bold font, background color, borders,
              and tick marks. Perfect for a concise and targeted message in The
              Hindu newspaper.
            </p>
          </div>

          <div>
            <p>
              Classified Display Ads: Stand out with a boxed Matrimonial ad!
              These customizable ads are priced per square centimeter in The
              Hindu and allow you to personalize your message with fonts,
              images, and colors. We even offer free design assistance for
              Classified Display Matrimonial Ads.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10">
        <div>
          <h2 className="font-bold text-[#000080]">
            BOOK MATRIMONIAL AD IN THE HINDU THROUGH TWO EFFECTIVE AD FORMATS:
          </h2>
        </div>

        <div>
          <p>
            Classified Text Ads: Our most cost-effective option. Your
            Matrimonial ad will appear in simple running text format with
            optional enhancements like bold font, background color, borders, and
            tick marks. Perfect for a concise and targeted message in The Hindu
            newspaper.
          </p>
        </div>
        <div>
          <p>
            Classified Display Ads: Stand out with a boxed Matrimonial ad! These
            customizable ads are priced per square centimeter in The Hindu and
            allow you to personalize your message with fonts, images, and
            colors. We even offer free design assistance for Classified Display
            Matrimonial Ads.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-bold]">
          <h1 className=" text-[#000080] font-bold">HOW TO BOOK MATRIMONIAL AD IN THE HINDU NEWSPAPER?</h1>
          <p>
            Matrimonial ad in The Hindu newspaper can be booked online. Here's a
            step-by-step guide:
          </p>
        </div>
        <ol className="list-decimal pl-5">
          <li>
            <ol type="A" className="pl-5">
              <li>
                You can visit The Hindu official Ad Booking Page at
                Ads2Publish.com and book the ad online by following a simple
                booking process.
              </li>
            </ol>
          </li>
          <li>
            Visit Ads2Publish: Head over to Ads2Publish.com and select The
            Hindu from the newspaper list to get started.
          </li>
          <li>Choose Your Ad Type: Select Classified or Display based on your needs.</li>
          <li>Pick Your City: Tell them which city edition of The Hindu you want your ad in.</li>
          <li>Schedule Your Ad: Choose the date you want your ad to appear in the newspaper.</li>
          <li>Craft Your Message: Write your ad content, using the classifieds samples on Ads2Publish for guidance.</li>
          <li>Review and Pay: Double-check your ad details and cost. Ads2Publish accepts various payment methods like credit/debit cards, Google Pay, or bank transfer.</li>
          <li>Confirmation & Receipt: Once you pay, you'll receive a confirmation email with a GST invoice for your records. Thus, following the above steps you can easily book your ad in The Hindu Newspaper and get it published on your chosen date.</li>
        </ol>
      </div>

      <Matrimonialinside />
    </div>
  );
};

export default Matrimonial;
