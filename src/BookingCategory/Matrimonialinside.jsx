import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Matrimonialinside = () => {
  const [isActive, setIsActive] = useState(false);
  const [publish, setPublish] = useState(false);
  const [matrimonial, setMatrimonial] = useState(false);
  const [cost, setCost] = useState(false);
  const [advancePayment, setAdvancePayment] = useState(false);
  const [wantedBrideAds, setWantedBrideAds] = useState(false);

  const toggleMatrimonial = () => {
    setMatrimonial(!matrimonial);
  };

  const togglePublish = () => {
    setPublish(!publish);
  };

  const toggleCost = () => {
    setCost(!cost);
  };

  const toggleAdvancePayment = () => {
    setAdvancePayment(!advancePayment);
  };

  const toggleWantedBrideAds = () => {
    setWantedBrideAds(!wantedBrideAds);
  };

  return (
    <div>
      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleMatrimonial}
        >
          <h1 className="text-white">
            Q: How to write a Matrimonial Ad for the Hindu newspaper?
          </h1>
          <span className="ml-4">
            {matrimonial ? (
              <RemoveIcon sx={{ fontSize: 18, color: "gray" }} />
            ) : (
              <AddIcon sx={{ fontSize: 18, color: "gray" }} />
            )}
          </span>
        </div>

        {matrimonial && (
          <div className="p-4 bg-white">
            <p>
              A: To write an effective Ad for Hindu newspaper, ensure to include
              essential details like age, height of the individual seeking a
              partner, and contact information for relevant responses. Specify
              preferences such as divorcee status, NRI, or physical
              disabilities, and outline astrological details like DOB, place of
              birth. Mention religion, caste, or opt for "No Caste Bar" for
              responses from desired social backgrounds. Additionally, highlight
              educational/professional qualifications, occupation, salary, and
              residence for suitable matches for the bride or groom. Providing
              preferred communication timings and any special preferences will
              streamline responses, enhancing the effectiveness of your
              advertisement in the Hindu newspaper.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={togglePublish}
        >
          <h1 className="text-white">
            Q: How many times is my matrimonial ad going to publish in the
            newspaper?
          </h1>
          <span className="ml-4">
            {publish ? (
              <RemoveIcon sx={{ fontSize: 18, color: "gray" }} />
            ) : (
              <AddIcon sx={{ fontSize: 18, color: "gray" }} />
            )}
          </span>
        </div>

        {publish && (
          <div className="p-4 bg-white">
            <p>
              A: If you book your matrimonial ad for 1 date then it is going to
              publish once. However, you can select multiple dates package
              scheme where you get an extra discount on ad cost for 2 Ads package
              and 4 Ads package in The Hindu Newspaper.
            </p>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleCost}
        >
          <h1 className="text-white">
            Q: What is the cost of a Matrimonial Ad in The Hindu?
          </h1>
          <span className="ml-4">
            {cost ? (
              <RemoveIcon sx={{ fontSize: 18, color: "gray" }} />
            ) : (
              <AddIcon sx={{ fontSize: 18, color: "gray" }} />
            )}
          </span>
        </div>

        {cost && (
          <div className="p-4 bg-white">
            <div>
              <p>A: Following are the special packages for booking matrimonial Ads:</p>
              <ol className="list-decimal pl-5">
                <li>
                  <ol type="A" className="pl-5">
                    <li>
                      Hindu 2 Newspaper Matrimonial Ad Package Costs Rs. 1875
                      for a minimum of 2 Lines and Rs. 585 for every additional
                      line. Your Ad publishes in The Hindu (English) & Hindu
                      Tamil (Tamil) Newspapers.
                    </li>
                  </ol>
                </li>
                <li>
                  Hindu 2 Sunday Matrimonial Ads Package Costs Rs. 1970 for a
                  minimum of 2 Lines and Rs. 600 for every additional line. Your
                  Ad publishes in The Hindu Newspaper for 2 Sundays.
                </li>
                <li>
                  Hindu 4 Sunday Matrimonial Ads Package Costs Rs. 2600 for a
                  minimum of 2 Lines and Rs. 800 for every additional line. Your
                  Ad publishes in The Hindu Newspaper for 4 Sundays.
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleAdvancePayment}
        >
          <h1 className="text-white">
            Q: Do I need to pay in advance for booking a Hindu Matrimonial Ad?
          </h1>
          <span className="ml-4">
            {advancePayment ? (
              <RemoveIcon sx={{ fontSize: 18, color: "gray" }} />
            ) : (
              <AddIcon sx={{ fontSize: 18, color: "gray" }} />
            )}
          </span>
        </div>

        {advancePayment && (
          <div className="p-4 bg-white">
            <p>
              A: Yes, for booking an ad in the Hindu newspaper, advance payment
              is required. Once you complete the ad booking process, you'll be
              directed to the payment gateway page where you can conveniently
              pay through various payment options.
            </p>
          </div>
        )}
      </div>

      <div className=" p-4 w-full max-w-3xl">
        <div
          className="flex justify-between items-center bg-slate-400 p-4 cursor-pointer rounded-2xl"
          onClick={toggleWantedBrideAds}
        >
          <h1 className="text-white">
            Q: Here are some of the Wanted Bride Ads published in The Hindu:
          </h1>
          <span className="ml-4">
            {wantedBrideAds ? (
              <RemoveIcon sx={{ fontSize: 18, color: "gray" }} />
            ) : (
              <AddIcon sx={{ fontSize: 18, color: "gray" }} />
            )}
          </span>
        </div>

        {wantedBrideAds && (
          <div className="p-4 bg-white">
            <p>
              A: Here you can find the new bride ad updates with a low price.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matrimonialinside;
