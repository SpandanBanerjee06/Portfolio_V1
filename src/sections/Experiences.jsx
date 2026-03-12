import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);

  // Tracks the scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  // Animates the height of the bar from 0% to 100%
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
      {/* The Animated Vertical Scroll Bar */}
      <div className="absolute left-[50%] top-0 h-full w-[2px] bg-white/10 hidden md:block">
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 h-full w-full bg-gradient-to-b from-lavender via-royal to-indigo origin-top"
        />
      </div>

      <div className="flex flex-col gap-20 mt-12">
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
            
            {/* LEFT SIDE: Date and Company */}
            <div className="flex flex-col md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {item.date}
              </h3>
              <p className="text-lg text-neutral-400 font-medium">
                {item.job}
              </p>
            </div>

            {/* RIGHT SIDE: Position Title and Experience Details */}
            <div className="flex flex-col gap-4">
              {/* Position Title (Moved to the right side) */}
              <h4 className="text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h4>
              
              {/* Experience Details (Listed underneath) */}
              <ul className="flex flex-col gap-3">
                {item.contents.map((content, i) => (
                  <li key={i} className="text-neutral-400 font-normal leading-relaxed flex gap-2">
                    <span className="text-royal">•</span>
                    {content}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};