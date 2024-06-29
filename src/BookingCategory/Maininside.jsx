import React from "react";
import news from "../assets/news.jpg";
import Maininside2 from "./Maininside2";
const Maininside = () => {
  return (
    <div>
   <div className="flex justify-center items-center h-screen">
  <table
    cellspacing="4"
    cellpadding="4"
    style={{
      textAlign: "center",
      width: "70%",
      margin: "0 auto",
      gap: "5px",
    }}
  >
    <tbody>
      <tr>
        <td>
          <a href="//www.bhavesads.com/the-hindu/display-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-display.jpg"
              alt="The Hindu Display Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Display Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/metro-plus-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-metro-plus.jpg"
              alt="The Hindu Metro Plus Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Metro Plus Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/property-plus-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-property-plus.jpg"
              alt="The Hindu Property Plus Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Property Plus Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/obituary-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-obituary.jpg"
              alt="The Hindu Obituary Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> The Hindu Obituary Ad</span>
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="4"></td>
      </tr>
      <tr>
        <td>
          <a href="//www.bhavesads.com/the-hindu/empower-opportunities-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-empower.jpg"
              alt="The Hindu Empower Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Empower Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/education-plus-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-education-plus.jpg"
              alt="The Hindu Education Plus Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Education Plus Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/friday-review-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-friday-review.jpg"
              alt="The Hindu Friday Review Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Friday Review Ad</span>
          </a>
        </td>
        <td>
          <a href="//www.bhavesads.com/the-hindu/public-notice-ad-rates">
            <img
              src="//www.bhavesads.com/wp-content/uploads/2016/07/the-hindu-public-notice.jpg"
              alt="The Hindu Public Notice Ad Rates"
              style={{ width: "150px", height: "177px", marginLeft: "50px" }}
            />
            <br />
            <span className="text-[red]"> Public Notice Ad</span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


     
<div className="flex justify-center mt-4">
  <h1 className="font-bold text-2xl text-[#000080]">
    Process of booking an ad in The Hindu newspaper
  </h1>
</div>

<div className="flex justify-center items-center w-full">
  <div className="w-[70%]">
    <ol className="list-decimal pl-5">
      <li>
        <ol type="A" className="pl-5">
          <li>You can visit The Hindu official Ad Booking Page at Ads2Publish.com and book the ad online by following a simple booking process.</li>
        </ol>
      </li>
      <li>Visit Ads2Publish: Head over to Ads2Publish.com and select The Hindu from the newspaper list to get started.</li>
      <li>Choose Your Ad Type: Select Classified or Display based on your needs.</li>
      <li>Pick Your City: Tell them which city edition of The Hindu you want your ad in.</li>
      <li>Schedule Your Ad: Choose the date you want your ad to appear in the newspaper.</li>
      <li>Craft Your Message: Write your ad content, using the classifieds samples on Ads2Publish for guidance.</li>
      <li>Review and Pay: Double-check your ad details and cost. Ads2Publish accepts various payment methods like credit/debit cards, Google Pay, or bank transfer.</li>
      <li>Confirmation & Receipt: Once you pay, you'll receive a confirmation email with a GST invoice for your records. Thus, following the above steps you can easily book your ad in The Hindu Newspaper and get it published on your chosen date.</li>
    </ol>
  </div>
</div>


        <Maininside2/>
    </div>
  );
};

export default Maininside;
