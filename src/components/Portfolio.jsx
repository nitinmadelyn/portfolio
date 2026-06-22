import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/works/import.io.png",
    title: "Import.io — $8.8M ARR",
    desc: "Scaled web data extraction platform to $8.8M ARR with high-performance scrapers and distributed data pipelines.",
    tags: ["Puppeteer", "Node.js", "ElasticSearch", "AWS", "Web Scrapers"],
    link: "https://import.io/",
  },
  {
    image: "/works/beforeyoubid.com.au.png",
    title: "PropTech: BeforeYouBuy",
    desc: "Australian PropTech platform that raised $5M in Series B — helping buyers make informed property decisions.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    link: "https://www.beforeyoubuy.com.au/",
  },
  {
    image: "/works/stashly.pro.png",
    title: "Stashly.pro",
    desc: "Cross-platform personal bookmark manager — save, organize and revisit anything from the web on iOS and Android.",
    tags: ["React Native", "Next.js", "Supabase", "iOS", "Android"],
    link: "https://stashly.pro",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">{project.title}</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View Project" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all duration-300">
                View Project <FiExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
