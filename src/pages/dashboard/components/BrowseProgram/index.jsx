import { MissingFieldError } from "@apollo/client";

const BrowseProgram = () => {
  return (
    <section className="mx-4 h-[calc(100vh*0.3439)] w-[calc(100vw-2rem)] rounded-[30px] bg-d-medium p-5 font-mainSans text-d-light">
      <a href="#">
        <h3 className="text-lg font-bold">
          Bitte trage Dich für ein Programm ein!
        </h3>
      </a>
    </section>
  );
};

export default BrowseProgram;
