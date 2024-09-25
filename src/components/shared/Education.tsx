import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "B.Tech in CS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg font-normal mb-8">
            I am currently pursuing  in my B.Tech in Computer Science & Engineering from College of Engineering & Management, Kolaghat. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Higher Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs xl:text-lg  md:text-sm font-normal mb-8">
            I have completed my Higher Secondary from Sagarpur Sir Ashutosh High School in 2021.
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg  font-normal mb-4">
            I have completed my Secondary from Daspur Vivekananda High School (H.S) in 2019.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="education">
      <Timeline data={data} />
    </div>
  );
}
