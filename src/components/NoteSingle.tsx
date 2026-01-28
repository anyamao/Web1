import {
  PanelRight,
  Search,
  Pencil,
  X,
  Plus,
  CirclePlus,
  TextAlignJustify,
} from "lucide-react";

const NoteSingle = () => {
  return (
    <div className="w-[700px] h-[400px] bg-pink-100 outline-[2px] outline-pink-200 mt-[10px]  flex flex-row rounded-[5px] overflow-hidden">
      <div className="bg-pink-200 w-[35px] flex flex-col items-center pt-[8px]">
        <PanelRight className="icon"></PanelRight>
        <Search className="icon mt-[7px]"></Search>
      </div>
      <div className="flex flex-col w-full pt-[10px] ">
        <div className="flex flex-row items-center justify-center relative">
          <p className="">Notes</p>
          <div className="flex bg-pink-200 items-center justify-center relative w-full mx-[50px] max-w-[330px] h-[20px] rounded-[3px] overflow-hidden ">
            <p className="flex flex-row max-w-[200px] max-h-[17px] overflow-hidden">
              Intro to Biology - CH1
            </p>
            <Pencil className="icon w-[13px] h-[13px] absolute right-0 mr-[5px]"></Pencil>
          </div>

          <div className="flex bg-pink-200 items-center justify-between px-[10px] rounded-[5px] absolute right-0 mr-[10px] w-[100px]">
            <CirclePlus className="icon w-[15px] h-[15px]"></CirclePlus>
            <TextAlignJustify className="icon" />
            <X className="icon"></X>
          </div>
        </div>

        <div className="flex flex-1 m-[15px]">
          Dddf dgfgddg dgkkgdkdg aeooror ;dldf ll dgkdgkg ko rog k
          grgrrogjgrjsjg j jo jrgjrj g jjrg rjg jg rjgrjgr jrg jrgrjgrjgrj
          rjgrgjo rjogjrgjogojsojro jogj oj oj rgogjrs;k peg o oj rogkg ojg j oj
          gojrogjoj gojs;lf og rjr g j
        </div>
      </div>
    </div>
  );
};

export default NoteSingle;
