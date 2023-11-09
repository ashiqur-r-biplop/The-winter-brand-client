import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { BsTrash } from "react-icons/bs";

const ViewFaq = () => {
  const items = [
    {
      header: "What is Lorem Ipsum?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      indexNumber: 1,
    },
    {
      header: "Where does it come from?",
      content:
        "Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi..",
      indexNumber: 2,
    },
    {
      header: "Why do we use it?",
      content:
        " Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.Fusce vulputate purus sed tempus feugiat.",
      indexNumber: 3,
    },
    {
      header: "What is Lorem Ipsum?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      indexNumber: 4,
    },
    {
      header: "Where does it come from?",
      content:
        "Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi..",
      indexNumber: 5,
    },
    {
      header: "Why do we use it?",
      content:
        " Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.Fusce vulputate purus sed tempus feugiat.",
      indexNumber: 6,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-center my-5 md:text-5xl text-xl">All FAQ</h2>
      <Accordion className="grid grid-cols-1 gap-5  my-[50px]">
        {items.map((item, i) => {
          return (
            <div
              className={`${
                item.indexNumber == 1
                  ? " border-green-400 border-b"
                  : item.indexNumber == 2
                  ? " border-blue-400 border-b"
                  : item.indexNumber == 3
                  ? " border-red-400 border-b"
                  : item.indexNumber == 4
                  ? " border-yellow-400 border-b"
                  : item.indexNumber % 4 === 1
                  ? " border-amber-800 border-b"
                  : item.indexNumber % 4 === 2
                  ? " border-blue-800 border-b"
                  : item.indexNumber % 4 === 3
                  ? "border-green-400 border-b"
                  : "border-red-400 border-b"
              }  flex justify-between items-center`}
            >
              <AccordionItem
                className={`${
                  item.indexNumber == 1
                    ? "border-l-[10px] px-2 border-green-400"
                    : item.indexNumber == 2
                    ? "border-l-[10px] px-2 border-blue-400"
                    : item.indexNumber == 3
                    ? "border-l-[10px] px-2 border-red-400"
                    : item.indexNumber == 4
                    ? "border-l-[10px] px-2 border-yellow-400"
                    : item.indexNumber % 4 === 1
                    ? "border-l-[10px] px-2 border-amber-800"
                    : item.indexNumber % 4 === 2
                    ? "border-l-[10px] px-2 border-blue-800"
                    : item.indexNumber % 4 === 3
                    ? "border-green-400"
                    : "border-red-400"
                } md:text-2xl`}
                header={item?.header}
              >
                <span className="md:text-[18px] text-[12px]">
                  {" "}
                  {item?.content}
                </span>
              </AccordionItem>
              <button>
                <BsTrash></BsTrash>
              </button>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ViewFaq;