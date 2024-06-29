import React from "react";
import newspaper from "../assets/hinduimg.png";
import ForwardIcon from "@mui/icons-material/Forward";
import email from "../assets/email-icon.jpg";
import bookonline from "../assets/Bookonline.png";
import addbooking from "../assets/addbooking.png";
import Maininside from "../BookingCategory/Maininside";
import phone from '../assets/phone.jpg'
import Dropdown from "../BookingCategory/Dropdown";
import Citydropdown from "../BookingCategory/Citydropdown";

const Header = () => {
  return (
    <div className="sl:p-2">
      <div className="bg-[#00308F]  lg:flex lg:flex-row sl:flex sl:flex-col   lg:p-5 sl:p-2">
        <div className=" lg:w-[40%] sl:w-full">
          <img src={newspaper} alt="news paper" className=" lg:ml-[40%]  sl:ml-3 " />
        </div>
        <div className=" lg:w-[50%] sl:w-full font-bold text-white">
          <p className="text-white lg:text-4xl sl:text-xl">
            Books the Hindu Ads online Easily for News Paper
          </p>
          <p className="mt-3 sl:w-full  ">
            The Hindu is an English-language daily newspaper owned by Kasturi
            and Sons Limited. Hindu has a massive reach in South India,
            especially Tamil Nadu. Instantly book Classifieds & Display Ads
            online at lowest rates for 16 Editions of The Hindu.
          </p>
          <p className="mt-3">
            NewsPaper Ads{" "}
            <ForwardIcon style={{ fontSize: "12px", marginLeft: "8px" }} />{" "}
            <span className="font-light">The Hindu</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5  ">
        <p className="font-semibold text-2xl text-[#483D8B] lg:mr-[40%] sl:w-full sl:text-xl ">
          Select a Classified Ad Category to start online booking:
        </p>
      </div>

      <div class="flex flex-col mt-5  lg:block sl:hidden  ">
        <div id="category">
          <ul class="list-none grid grid-cols-3 gap-0">
            <li class="flex items-center justify-center h-24">
              <a
                href="/matrimonial"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/matrimonial-icon.png"
                  alt="Matrimonial Icon"
                  class="w-8 h-8 mr-2"
                />
                <span class="text-base text-black">Matrimonial</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/property"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/property-for-sale-icon.png"
                  alt="Property For Sale Icon"
                  class="w-8 h-8 mr-2"
                />
                <span class="text-base text-black">Property For Sale</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/property-to-rent-icon.png"
                  alt="Property To Rent Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Property To Rent</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/lost-found-icon.png"
                  alt="Lost Found Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Lost Found</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/vehicles-icon.png"
                  alt="Vehicles Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Vehicles</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-1 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/name-change-icon.png"
                  alt="Name Change Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Name Change</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/astrology-icon.png"
                  alt="Astrology Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Astrology</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/business-icon.png"
                  alt="Business Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Business</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/computers-icon.png"
                  alt="Computer Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Computer</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/classified-remembrance-icon.png"
                  alt="Classified Remembrance Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Classified Remembrance</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/education-icon.png"
                  alt="Education Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Education</span>
              </a>
            </li>

            <li class="flex items-center justify-center h-24">
              <a
                href="/"
                title="Book Business Ad in The Hindu"
                class="flex flex-row items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-[50%] h-[50%]"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/obituary-icon.png"
                  alt="Obituary Icon"
                  class="w-8 h-8 mb-2"
                />
                <span class="text-base text-black">Obituary</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sl:block lg:hidden   sl:justify-center sl:items-center ">
        <Dropdown/>

      </div>

      <p className="flex justify-center items-center font-extrabold sl:mt-5	 text-red-700">
        OR
      </p>

      <h3 className="font-extrabold	text-[#483D8B] flex justify-center items-center mr-[45%]">
        Go with Hindhu Edition:
      </h3>

      <div className="flex justify-center items-center sl:hidden lg:block">
        <ul className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <li className="mb-4 sm:mb-0">
            <a href="/chennai">
              <strong className="block font-semibold bg-gray-200 p-4">
                Chennai
              </strong>
            </a>
            <span>(Circulation: 418,998 Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/hyderabad">
              <strong className="block font-semibold bg-gray-200 p-4">
                Hyderabad City
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/karnataka">
              <strong className="block font-semibold bg-gray-200 p-4">
                Karnataka
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/vizag">
              <strong className="block font-semibold bg-gray-200 p-4">
                Vizag
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/mangalore">
              <strong className="block font-semibold bg-gray-200 p-4">
                Mangalore
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/nasa-pondy">
              <strong className="block font-semibold bg-gray-200 p-4">
                Nasa Pondy
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/item7">
              <strong className="block font-semibold bg-gray-200 p-4">
                MADURAI
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/item8">
              <strong className="block font-semibold bg-gray-200 p-4">
                TRICHY
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/classified-ad/the-hindu/item9">
              <strong className="block font-semibold bg-gray-200 p-4">
                NEW DELHI
              </strong>
            </a>
            <span>(Circulation: XYZ Copies)</span>
          </li>
        </ul>
      </div>
      <div className="sl:block lg:hidden ">
        <Citydropdown />

      </div>


      <div className="lg:flex  lg:flex-row items-center lg:block sl:hidden justify-between h-[60%] w-[70%] ml-[16%] bg-green-500 p-4">
        <div className="flex flex-row items-center gap-4 ml-7">
          <div>
            <img src={phone} alt="phone" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white">Need Help! Call</p>
            <p className="text-white">Phone:+91-8121003003</p>
          </div>
          <div className="border border-black h-full flex justify-center items-center ml-32"></div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <div>
            <img src={email} alt="email" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white">Email:</p>
            <p className="text-white">customercare@ads2publish.com</p>
          </div>
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

      <div className="flex justify-center items-center">
        <p className=" lg:font-bold	lg:text-2xl text-[#483D8B] sl:text-xl sl:font-bold ">
          The Hindu Classifieds: A Cost-Effective Way to Reach Targeted
          Audiences in Chennai
        </p>
      </div>

      <div className=" lg:flex lg:flex-row lg:w-[90%] lg:h-full lg:ml-36 items-center justify-center sl:w-[100%]">
        <div className="lg:flex lg:flex-row items-center sl:flex sl:flex-col">
          <img
            src={bookonline}
            alt="book"
            className="w-[100%] h-[100%] object-cover lg:ml-14  sl:w-[90%] sl:h-[97%]"
          />
          <div className="flex items-center lg: p-4 sl:p-1 ">
            <p className=" lg:w-[80%] sl:w-full">
              The Hindu Classifieds is a section within The Hindu newspaper
              dedicated to short, text-based advertisements for a variety of
              needs. It's a budget-friendly option for individuals and
              businesses looking to reach a large audience in South India,
              particularly Tamil Nadu. Compared to display ads, classified ads
              are significantly cheaper, making them accessible for a wider
              range of advertisers. The Hindu caters to a specific demographic,
              allowing you to reach people actively seeking what you're
              offering. Categories include Property, Jobs, Matrimonial,
              Vehicles, Lost Found, Name Change Announcements, Obituary, and
              more categories for various needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <p className=" lg:w-[70%] sl:w-full">
          Classified ads typically have limited space (charged per line). The
          Hindu offers optional enhancements like bolding or border to make your
          ad stand out. Ads2Publish offer convenient online booking of
          classified ads for The Hindu Newspaper through their website. The
          Hindu Classifieds provide a cost-effective and targeted advertising
          solution for individuals and businesses in South India.
        </p>
      </div>

      <div className=" lg:w-[70%] lg:ml-48 font-bold sl:ml-1 sl:w-full	 text-2xl">
        <h1 className="text-[#483D8B]">
          The Hindu Classifieds Ads specifications:
        </h1>
      </div>
      <div className="lg:flex lg:flex-row sl:flex sl:flex-col lg:mt-5 lg:w-[90%]">
        <div>
          <img
            src={addbooking}
            alt="addbooking"
            className="w-[50%] h-[70%] object-cover lg:ml-48 mt-4"
          />
        </div>
        <div class="overflow-x-auto mt-4 mr-5 ">
          <table class="min-w-full border border-gray-300">
            <tbody>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 border-b border-gray-300">
                  Publishing Page:
                </td>
                <td class="px-6 py-4 border-b border-gray-300">
                  <strong>The Hindu Classifieds</strong>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-300">
                  Publishing Days:
                </td>
                <td class="px-6 py-4 border-b border-gray-300">
                  <strong>All days, (Sunday to Saturday)</strong>
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-6 py-4 border-b border-gray-300">
                  Ad Booking Deadline:
                </td>
                <td class="px-6 py-4 border-b border-gray-300">
                  <strong>1 day Prior for all Classifieds</strong>
                  <br />
                  2 days Prior for Matrimonial & Property Ads.
                  <br />
                  To be booked before 1:00 pm
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-300">
                  Accepted Ad Categories:
                </td>
                <td class="px-6 py-4 border-b border-gray-300">
                  Hindu Matrimonial, Recruitment in Empower, Property Sale &
                  Rent in Hindu Property Plus, Name Change Ad, Obituary Ad, Lost
                  Found Ad, Automotive, Business and Services
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td
                  colspan="2"
                  class="px-6 py-4 border-b border-gray-300 text-center"
                >
                  Hurry Up. Booking closes soon for the next edition of HT
                  Classifieds. Book Now and get instant Confirmation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className=" lg:ml-52 lg:w-[75%] mt-4 sl:w-full">
        <h1 className="font-bold text-[#483D8B] text-center">
          The Hindu Display Advertising
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-center">
            The Hindu offers a comprehensive suite of advertising options to
            cater to your specific needs. Whether you are interested in
            captivating display ads, concise classifieds, recruitment ads in
            Opportunities, property ads in Property Plus, or obituary ads in
            Obituaries & Remembrance, you have the flexibility to choose the
            avenue that best suits your message.
          </p>
        </div>
      </div>

      <Maininside />
    </div>
  );
};

export default Header;
