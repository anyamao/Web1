import {
  Sticker,
  SmilePlus,
  NotepadText,
  LayoutList,
  ClockPlus,
} from "lucide-react";

const NoteCreation = () => {
  return (
    <div className="absolute normal-text bottom-0 mb-[20px] w-[230px] px-[20px] h-[40px]  flex flex-row items-center justify-around bg-[#f0edeb] rounded-[10px]">
      <SmilePlus className="creating-icon"></SmilePlus>
      <NotepadText className="creating-icon"></NotepadText>
      <LayoutList className="creating-icon"></LayoutList>
      <ClockPlus className="creating-icon"></ClockPlus>
    </div>
  );
};

export default NoteCreation;
