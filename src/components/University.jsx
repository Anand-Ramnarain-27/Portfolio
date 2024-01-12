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

  const UniversityCard = ({ university }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={university.date}
        iconStyle={{ background: university.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={university.icon}
              alt={university.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{university.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {university.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {university.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
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
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
             Experience.
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {university.map((university, index) => (
              <UniversityCard
                key={`experience-${index}`}
                university={university}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };

  export default SectionWrapper(University, "");
