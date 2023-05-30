import { MissingFieldError } from "@apollo/client";

const dayNumber = 2;
const currentDay = `Tag ${dayNumber}`;
const programTitle = "Bottlebuilding";
const durationNumber = 26;
const theme = "Beweglichkeit";
const description = `${durationNumber} Min. · ${theme}`;

const PorgramPreview = () => {
  return (
    <section className="mx-4 h-[calc(100vh*0.3439)] w-[calc(100vw-2rem)] rounded-[30px] bg-d-medium p-5 font-mainSans text-d-light">
      <h3 className="text-lg font-bold">{currentDay}</h3>
      <h2 className="text-2xl font-bold">{programTitle}</h2>
      <p className="text-xs font-normal">{description}</p>
    </section>
  );
};

export default PorgramPreview;
