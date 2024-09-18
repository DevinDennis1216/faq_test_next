'use client'

import { useState } from "react";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  title: string;
  description: string;
  badge: string;
}

function Accordion({
  title, description, badge
}: AccordionProps) {
  const [isExpand, setExpand] = useState<boolean>(false);

  return <div className="flex flex-col gap-y-1">
    <div className="py-2 px-4 flex items-center justify-between font-bold border border-gray-300 rounded-lg cursor-pointer" onClick={() => {
      setExpand(!isExpand);
    }}>
      <p>{title}</p>
      <div className="flex items-center gap-x-2">
        <span className={twMerge('px-2 font-normal text-xs text-white text-center rounded-full', badge === 'data' ? 'bg-red-500' : badge === 'assumption' ? 'bg-green-500' : 'bg-blue-500')}>
          {badge}
        </span>
        <span>{isExpand ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
    </div>
    <div className={twMerge('py-2 px-4 text-sm border border-gray-500 rounded-lg', !isExpand ? 'hidden' : 'flex')}>{description}</div>
  </div>
}

export default Accordion;