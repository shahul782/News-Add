import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Maininside3 from "./Maininside3";

function Maininside2() {
  const [isActive, setIsActive] = useState(false);
  const [accept, setAccept] = useState(false);
  const [newspaper, setNewspaper] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [advertisment, setAdvertisment] = useState(false);
  const [effectiveadvertisment, setEffectiveAdvertisment] = useState(false);
  const [designveadvertisment, setDesignAdvertisment] = useState(false);
  const [logo, setLogo] = useState(false);
  const [payment, setPayment] = useState(false);
  const [booking, setBooking] = useState(false);
  const [cost, setCost] = useState(false);

  const toggleVisibility = () => {
    setIsActive(!isActive);
  };

  const toggleBooking = () => {
    setBooking(!booking);
  };
  const togglePayment = () => {
    setPayment(!payment);
  };
  const toggleLogo = () => {
    setLogo(!logo);
  };

  const toggleDesign = () => {
    setDesignAdvertisment(!designveadvertisment);
  };

  const toggleEffective = () => {
    setEffectiveAdvertisment(!effectiveadvertisment);
  };
  const toggleAdvertisment = () => {
    setAdvertisment(!advertisment);
  };
  const toggleAdvertising = () => {
    setAdvertising(!advertising);
  };
  const toggleAccept = () => {
    setAccept(!accept);
  };
  const toggleNewspaper = () => {
    setNewspaper(!newspaper);
  };

  const toggleCost = () => {
    setCost(!cost);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="font-bold text-2xl text-[#000080] mb-4">Frequently Asked Questions (FAQs) for advertising in The Hindu Newspaper:</h2>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleCost}
        >
          <h1 className="text-white">
            What is the cost of Advertisement in The Hindu Newspaper?
          </h1>
          <span className="ml-4">
            {cost ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon  sx={{ fontSize: 18, color: "gray" }}/>}
          </span>
        </div>

        {cost && (
          <div className="p-4 bg-white">
            <p>
              For The Hindu Classifieds, the base cost covers 2 Lines, with
              additional Line incurring extra charges. Enhancements like Bold
              text, Background Color or Tick Marks are available for added fees.
              Here are the charges for various Ad Categories.
            </p>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">The Hindu Ad Category</th>
                  <th className="border border-gray-300 px-4 py-2">Rate Starting from</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Matrimonial Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 1500/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Recruitment Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 2200/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Property Sale Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 2180/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Property Rent Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 1210/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Business Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 2310/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Name Change Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 440/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Vehicle Sale Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 1155/-</strong> for 2 Lines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Lost Found Ad</strong></td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Rs. 440/-</strong> for 2 Lines</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleVisibility}
        >
          <h1 className="text-white">
            Q. What type of advertisement does The Hindu accept?
          </h1>
          <span className="ml-4">
            {isActive ? <RemoveIcon   sx={{ fontSize: 18, color: "gray" }}/> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}
          </span>
        </div>

        {isActive && (
          <div className="p-4 bg-white">
            <p>
              A. Ads2Publish.com allows you to book several ad types in The
              Hindu: Classifieds: Text-based ads ideal for job postings,
              announcements, etc. Book them directly through our user-friendly
              online platform. Classified Display Ads: Similar to Classifieds
              but with the option to include borders or logos. Book them online
              as well. Display Ads: Larger, visually appealing ads with images
              and text. Perfect for showcasing products or branding. For Display
              Ads, please contact our The Hindu Ad Support team at
              customercare@ads2publish.com to discuss your specific
              requirements, ad size, placement options, and receive custom
              quotes.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleAccept}
        >
          <h1 className="text-white">
            Q. What types of advertisements does The Hindu accept?
          </h1>
          <span className="ml-4">{accept ? <RemoveIcon   sx={{ fontSize: 18, color: "gray" }}/> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}</span>
        </div>

        {accept && (
          <div className="p-4 bg-white">
            <p>
              A. Ads2Publish.com allows you to book several ad types in The
              Hindu: Classifieds: Text-based ads ideal for job postings,
              announcements, etc. Book them directly through our user-friendly
              online platform. Classified Display Ads: Similar to Classifieds
              but with the option to include borders or logos. Book them online
              as well. Display Ads: Larger, visually appealing ads with images
              and text. Perfect for showcasing products or branding. For Display
              Ads, please contact our The Hindu Ad Support team at
              customercare@ads2publish.com to discuss your specific
              requirements, ad size, placement options, and receive custom
              quotes.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleNewspaper}
        >
          <h1 className="text-white">
            How can I book a classified advertisement in The Hindu Newspaper?
          </h1>
          <span className="ml-4">
            {newspaper ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon  sx={{ fontSize: 18, color: "gray" }}/>}
          </span>
        </div>

        {newspaper && (
          <div className="p-4 bg-white">
            <p>
              Booking a classified advertisement in The Hindu Newspaper is
              easy: <br />
              1. Visit Ads2Publish.com and select The Hindu Newspaper. <br />
              2. Choose the ad type: Text Classified, Classified Display, or
              Display Ad. <br />
              3. Fill in the ad details and customize your ad. <br />
              4. Select the publishing date and location. <br />
              5. Make the payment online. <br />
              6. Your ad will be published in The Hindu Newspaper on the chosen
              date.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleAdvertising}
        >
          <h1 className="text-white">
            Why should I advertise in The Hindu Newspaper?
          </h1>
          <span className="ml-4">
            {advertising ? <RemoveIcon   sx={{ fontSize: 18, color: "gray" }}/> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}
          </span>
        </div>

        {advertising && (
          <div className="p-4 bg-white">
            <p>
              Advertising in The Hindu Newspaper offers several benefits: <br />
              1. Wide Reach: The Hindu is one of the most widely read
              newspapers in India, ensuring your ad reaches a large audience.{" "}
              <br />
              2. Credibility: Ads in The Hindu are trusted by readers, enhancing
              your brand's credibility. <br />
              3. Targeted Advertising: You can choose specific cities and
              sections to reach your target audience effectively. <br />
              4. Cost-effective: The Hindu offers competitive rates for various
              ad types, ensuring good value for your money.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleAdvertisment}
        >
          <h1 className="text-white">
            What are the steps to book an advertisement in The Hindu Newspaper?
          </h1>
          <span className="ml-4">
            {advertisment ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}
          </span>
        </div>

        {advertisment && (
          <div className="p-4 bg-white">
            <p>
              To book an advertisement in The Hindu Newspaper, follow these
              steps: <br />
              1. Visit Ads2Publish.com and select The Hindu Newspaper. <br />
              2. Choose the ad type: Text Classified, Classified Display, or
              Display Ad. <br />
              3. Fill in the ad details and customize your ad. <br />
              4. Select the publishing date and location. <br />
              5. Make the payment online. <br />
              6. Your ad will be published in The Hindu Newspaper on the chosen
              date.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleEffective}
        >
          <h1 className="text-white">
            How to create an effective advertisement for The Hindu Newspaper?
          </h1>
          <span className="ml-4">
            {effectiveadvertisment ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}
          </span>
        </div>

        {effectiveadvertisment && (
          <div className="p-4 bg-white">
            <p>
              Creating an effective advertisement for The Hindu Newspaper
              involves: <br />
              1. Clear Message: Ensure your ad message is clear and concise.{" "}
              <br />
              2. Eye-catching Design: Use bold headlines and visuals to grab
              attention. <br />
              3. Contact Information: Include your contact details for easy
              communication. <br />
              4. Call to Action: Encourage readers to take action, such as
              visiting your website or contacting you. <br />
              5. Proofread: Double-check your ad for any errors before
              submission.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleDesign}
        >
          <h1 className="text-white">
            What are the design guidelines for advertising in The Hindu
            Newspaper?
          </h1>
          <span className="ml-4">
            {designveadvertisment ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon   sx={{ fontSize: 18, color: "gray" }}/>}
          </span>
        </div>

        {designveadvertisment && (
          <div className="p-4 bg-white">
            <p>
              The Hindu Newspaper has specific design guidelines for
              advertisements: <br />
              1. Ad Size: Follow the ad size specifications provided by the
              newspaper. <br />
              2. Format: Submit your ad in the required format (PDF, JPEG, etc.)
              with high resolution. <br />
              3. Content: Ensure the content is clear, readable, and free from
              any prohibited material. <br />
              4. Images: Use high-quality images that are relevant to your ad.{" "}
              <br />
              5. Font: Use legible fonts and avoid overcrowding the ad with too
              much text.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleLogo}
        >
          <h1 className="text-white">
            How can I include my logo in the advertisement for The Hindu
            Newspaper?
          </h1>
          <span className="ml-4">{logo ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon  sx={{ fontSize: 18, color: "gray" }} />}</span>
        </div>

        {logo && (
          <div className="p-4 bg-white">
            <p>
              Including your logo in the advertisement for The Hindu Newspaper
              can be done as follows: <br />
              1. Choose the Classified Display or Display Ad format. <br />
              2. While filling in the ad details, upload your logo in the
              specified section. <br />
              3. Ensure your logo is in high resolution and in the required
              format (JPEG, PNG, etc.). <br />
              4. Position your logo appropriately within the ad layout for
              better visibility.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={togglePayment}
        >
          <h1 className="text-white">
            What are the payment options for booking an advertisement in The
            Hindu Newspaper?
          </h1>
          <span className="ml-4">{payment ? <RemoveIcon  sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon   sx={{ fontSize: 18, color: "gray" }}/>}</span>
        </div>

        {payment && (
          <div className="p-4 bg-white">
            <p>
              Ads2Publish.com offers several payment options for booking an
              advertisement in The Hindu Newspaper: <br />
              1. Credit/Debit Cards: Use your Visa, MasterCard, or American
              Express card. <br />
              2. Net Banking: Select your bank and make the payment directly
              through internet banking. <br />
              3. UPI: Pay using your UPI ID or QR code. <br />
              4. Wallets: Use popular digital wallets like Paytm, PhonePe, etc.
              <br />
              5. Offline Payment: Contact Ads2Publish customer support for
              offline payment options.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex items-center justify-between bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleBooking}
        >
          <h1 className="text-white">
            How can I check the status of my advertisement booking in The Hindu
            Newspaper?
          </h1>
          <span className="ml-4">{booking ? <RemoveIcon sx={{ fontSize: 18, color: "gray" }} /> : <AddIcon sx={{ fontSize: 18, color: "gray" }} />}</span>
        </div>

        {booking && (
          <div className="p-4 bg-white">
            <p>
              To check the status of your advertisement booking in The Hindu
              Newspaper, follow these steps: <br />
              1. Visit Ads2Publish.com and log in to your account. <br />
              2. Go to the 'My Bookings' section. <br />
              3. Locate your advertisement booking and click on it for details.{" "}
              <br />
              4. You can view the booking status, publishing date, and other
              details related to your ad. <br />
              5. For further assistance, contact Ads2Publish customer support.
            </p>
          </div>
        )}
      </div>

      <Maininside3 />
    </div>
  );
}

export default Maininside2;


