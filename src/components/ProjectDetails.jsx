import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-lg top-4 right-4 hover:bg-white/10 transition-colors z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="Close Modal" />
        </button>
        
        {/* We removed the broken image tag from here */}
        
        <div className="p-6 mt-6 sm:p-8 sm:mt-8">
          <h5 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{title}</h5>
          <p className="mb-4 font-normal text-neutral-400">{description}</p>
          
          {/* Added a 'key' here to stop React from complaining in the console */}
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              • {subDesc}
            </p>
          ))}
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag.id} 
                  className="px-3 py-1 text-sm font-medium text-white rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            
            {/* The href is now properly on the 'a' tag, and target="_blank" opens it in a new tab */}
            <a 
              href={href} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-medium text-white transition-colors border rounded-lg cursor-pointer bg-white/5 border-white/10 hover:bg-white/10 hover-animation"
            >
              View Project 
              <img src="assets/arrow-up.svg" className="w-4 h-4" alt="Arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;