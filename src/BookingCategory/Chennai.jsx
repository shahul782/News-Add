import React from "react";
import hedingNews from "../assets/hinduimg.png";
import bookonline from "../assets/Bookonline.png";

const Chennai = () => {
  return (
    <div className="p-5">
      <div className="bg-[#000080] flex flex-row ">
        <div className="w-[40%]">
          <img src={hedingNews} alt="news paper" className="ml-[40%] mt-2" />
        </div>
        <div className="w-[50%] font-bold text-white">
          <p className="text-white text-4xl">THE HINDU CLASSIFIEDS CHENNAI</p>
          <p className="mt-3">
            Get your Ad published in Chennai Edition of The Hindu Newspaper. We
            are authorized Ad Booking Agents of The Hindu Newspaper to book
            Classifieds ads Online.
          </p>
          <p className="mt-3">
            Newspaper Ads ➧ The Hindu Classifieds ➧ Classifieds in Chennai
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-5 ">
        <div id="category">
          <ul className="list-none grid grid-cols-3 gap-4">
            <li className="flex items-center justify-center h-24">
              <a
                href="/matrimonial"
                title="Book Matrimonial Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/matrimonial-icon.png"
                  alt="Matrimonial Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Matrimonial</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/property"
                title="Book Business Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/property-for-sale-icon.png"
                  alt="Property For Sale Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Property For Sale</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/rent"
                title="Book Business Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/property-to-rent-icon.png"
                  alt="Property To Rent Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Property To Rent</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Lost Found Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/lost-found-icon.png"
                  alt="Lost Found Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Lost Found</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Vehicles Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/vehicles-icon.png"
                  alt="Vehicles Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Vehicles</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Name Change Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/name-change-icon.png"
                  alt="Name Change Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Name Change</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Astrology Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/astrology-icon.png"
                  alt="Astrology Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Astrology</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Business Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/business-icon.png"
                  alt="Business Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Business</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Computer Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/computers-icon.png"
                  alt="Computer Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Computer</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Classified Remembrance Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/classified-remembrance-icon.png"
                  alt="Classified Remembrance Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">
                  Classified Remembrance
                </span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Education Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/education-icon.png"
                  alt="Education Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Education</span>
              </a>
            </li>

            <li className="flex items-center justify-center h-24">
              <a
                href="/classified-ad/the-hindu/business"
                title="Book Obituary Ad in The Hindu"
                className="flex flex-col items-center p-4 border border-gray-400 rounded-md hover:bg-gray-100 w-full h-full"
              >
                <img
                  src="https://www.ads2publish.com/assets/images/obituary-icon.png"
                  alt="Obituary Icon"
                  className="w-8 h-8 mb-2"
                />
                <span className="text-base text-black">Obituary</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1>BOOK CLASSIFIED AD IN THE HINDU NEWSPAPER IN CHENNAI</h1>
      </div>
      <div className="flex flex-row">
        <p className="w-[70%]">
          If you looking to post Classified ad in Chennai Newspapers then The
          Hindu can be the best option. The Hindu is one of the leading
          newspapers which has very good circulation and readership in Chennai.
          Book Matrimonial, Recruitment, Property For Sale, Property To Rent,
          Name Change, Lost Found, Vehicles Sale or Purchase, Astrology,
          Business, Computers, Education, Personal Announcement, Retail,
          Services and Travel Classified Ads in The Hindu Newspaper.
        </p>

        <div>
          <img src={bookonline} alt="Book Online" />
        </div>
      </div>

      <h1>THE HINDU'S LEADING CLASSIFIED AD AGENCY IN CHENNAI</h1>
      <div className="flex justify-center items-center">
        <p>
          We can be your trusted agents for booking ads in The Hindu Chennai
          Newspaper at the lowest rates and with top-notch service. Our
          dedicated booking center in Chennai makes it easy to post classified
          ads in the newspaper without any extra charges. We showcase attractive
          offers and packages for advertising in The Hindu Chennai Newspaper,
          ensuring you save money and attract the best response for your ad.
          Being a leading Newspaper Ad Agency of Chennai, we offer lower cost
          for Booking Newspaper Advertisement online for The Hindu through our
          online booking service.
        </p>
      </div>

      <h1>CONTACT THE HINDU CHENNAI CLASSIFIEDS AD BOOKING TEAM:</h1>
      <div>
        <p>
          Our friendly customer support team is here to assist you every step of
          the way, whether you're booking your ad or tracking its publication in
          the newspaper. Reach out to us via Live Chat, Phone: +918121003003, or
          Email: customercare@ads2publish.com. As Chennai's leading Classified
          Ad Agency, Ads2Publish offers newspaper advertisement booking at
          competitive rates, often even lower than The Hindu's standard tariff
          rates, through our hassle-free online booking service.
        </p>
      </div>

      <h1>HOW TO BOOK CLASSIFIED AD IN THE HINDU NEWSPAPER CHENNAI?</h1>
      <div>
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
            Visit Ads2Publish: Head over to Ads2Publish.com and select The Hindu
            from the newspaper list to get started.
          </li>
          <li>
            Choose Your Ad Type: Select Classified or Display based on your
            needs.
          </li>
          <li>
            Pick Your City: Tell them which city edition of The Hindu you want
            your ad in.
          </li>
          <li>
            Schedule Your Ad: Choose the date you want your ad to appear in the
            newspaper.
          </li>
          <li>
            Craft Your Message: Write your ad content, using the classifieds
            samples on Ads2Publish for guidance.
          </li>
          <li>
            Review and Pay: Double-check your ad details and cost. Ads2Publish
            accepts various payment methods like credit/debit cards, Google Pay,
            or bank transfer.
          </li>
          <li>
            Confirmation & Receipt: Once you pay, you'll receive a confirmation
            email with a GST invoice for your records. Thus, following the above
            steps you can easily book your ad in The Hindu Newspaper and get it
            published on your chosen date.
          </li>
        </ol>
      </div>

      
    </div>
  );
};

export default Chennai;
