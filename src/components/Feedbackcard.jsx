/* eslint-disable react/prop-types */
import { quotes } from "../assets";

const Feedbackcard = ({ content, name, img, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p
      className={`text-white font-poppins font-normal text-[18px] my-10 leading-[32px]`}
    >
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px]h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4
          className={`text-white font-poppins font-semibold text-[20px]  leading-[32px]`}
        >
          {name}
        </h4>
        <p
          className={`text-dimWhite font-poppins font-normal text-[16px]  leading-[24px]`}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default Feedbackcard;
