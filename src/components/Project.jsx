import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm font-medium">
            {tags.map((tag) => (
              <span 
                key={tag.id} 
                className="px-3 py-1 text-white rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="Read more" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;