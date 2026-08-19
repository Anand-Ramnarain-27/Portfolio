import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { university } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const UniversityCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#101114",
        color: "#e7eaee",
        border: "1px solid #22252b",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #101114" }}
      date={item.date}
      iconStyle={{ background: "#101114", border: "2px solid #4fd8c4" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={item.icon}
            alt={item.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-ink text-[22px] font-display font-bold'>{item.title}</h3>
        <p
          className='text-accent-2 text-[14px] font-medium'
          style={{ margin: 0 }}
        >
          {item.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {item.points.map((point, index) => (
          <li
            key={`university-point-${index}`}
            className='text-dim text-[14px] pl-1 tracking-wide'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const University = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My studies so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {university.map((item, index) => (
            <UniversityCard key={`university-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(University, "university");