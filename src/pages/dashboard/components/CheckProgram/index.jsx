import ProgramPreview from "../ProgramPreview";
import BrowseProgram from "../BrowseProgram";

const CheckProgram = () => {
  return (
    <div>
      {ProgramPreview === true ? <ProgramPreview /> : <BrowseProgram />};
    </div>
  );
};

export default CheckProgram;

// ProgramPreview erreicht nie den truth Zustand
