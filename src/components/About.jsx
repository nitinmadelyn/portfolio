import React from 'react';
import { FiAward, FiBookOpen, FiCode, FiArrowUpRight } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiElasticsearch,
  SiPostgresql,
} from 'react-icons/si';

const AwsIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.15 0 .253.024.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.024.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.127a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.319-.08-.063-.056-.12-.16-.151-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.168.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.510.088.16.040.312.080.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.07.223-.255.152-.384.384-.384.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
    <path d="M21.25 16.396c-2.539 1.874-6.226 2.87-9.4 2.87-4.443 0-8.442-1.644-11.462-4.378-.239-.215-.024-.51.263-.343 3.264 1.9 7.3 3.045 11.47 3.045 2.81 0 5.898-.583 8.738-1.79.43-.183.79.278.391.596z"/>
    <path d="M22.293 15.21c-.326-.42-2.16-.199-2.984-.1-.25.03-.288-.19-.064-.35 1.46-1.028 3.856-.732 4.137-.387.28.347-.073 2.75-1.445 3.897-.21.176-.41.087-.317-.15.309-.77.999-2.49.673-2.91z"/>
  </svg>
);

export default function About() {
  const Aboutdata = [
    {
      icon: <FiCode size={20} />,
      title: 'Languages',
      desc: 'Next.js, React.js, Node.js, TypeScript, Express.js, NestJS, JavaScript, React Native, SQL/NoSQL, Tailwind CSS, MongoDB, ElasticSearch, AWS',
    },
    {
      icon: <FiBookOpen size={20} />,
      title: 'Education',
      desc: 'Master in Computer Science',
    },
    {
      icon: <FiAward size={20} />,
      title: 'Projects',
      desc: 'Delivered 145+ web & mobile projects',
    },
  ];

  const Tools = [
    { icon: <SiNextdotjs size={24} />, title: "Next.js" },
    { icon: <SiReact size={24} />, title: "React.js / React Native" },
    { icon: <SiNodedotjs size={24} />, title: "Node.js" },
    { icon: <SiTypescript size={24} />, title: "TypeScript" },
    { icon: <SiNestjs size={24} />, title: "NestJS" },
    { icon: <SiJavascript size={24} />, title: "JavaScript" },
    { icon: <SiTailwindcss size={24} />, title: "Tailwind CSS" },
    { icon: <SiMongodb size={24} />, title: "MongoDB" },
    { icon: <SiPostgresql size={24} />, title: "SQL / NoSQL" },
    { icon: <SiElasticsearch size={24} />, title: "ElasticSearch" },
    { icon: <AwsIcon size={24} />, title: "AWS Certified" },
  ];

  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-20 px-6 md:px-12"
    >
      {/* --- BG EFFECTS --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
      <div
        className="absolute inset-0 z-[15] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)',
        }}
      ></div>

      {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
      <div
        className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      >
        <img
          src="/images/ezgif-frame-240.jpg"
          alt="About Profile"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
      </div>

      {/* --- CONTENT (RIGHT 55%) --- */}
      <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
        {/* Visual Gap for the face mask area */}
        <div className="hidden lg:block w-[35%] h-full"></div>

        {/* Main Content Pane */}
        <div className="w-full lg:w-[65%] flex flex-col space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-2xl">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">
              15+ Years. 140+ Projects. 100% Success.
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
              About Me<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Bio Paragraph */}
          <div className="robotic-section">
            <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
              <span className="text-white font-medium">
                Senior Full Stack Engineer
              </span>{' '}
              who turns complex problems into clean, production-ready solutions.
              Whether it's a web platform, mobile app, or end-to-end system. I
              bring the experience to ship it right the first time. Your
              project's success is my benchmark.{' '}
              <span className="text-white font-medium">
                Let's build something that works, scales, and lasts.
              </span>
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Aboutdata.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl"
              >
                <div className="text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Dock */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-5">
              {Tools.map((tool) => (
                <div
                  key={tool.title}
                  className="group relative p-4 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help"
                >
                  <div className="text-gray-500 group-hover:text-blue-600 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                    {tool.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="https://docs.google.com/document/d/1CR0QnaCMGc-wX6QktCAPsMjr6OuH86KOKjMf_1AEkGM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-6 px-12 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20"
            >
              <span>My Resume</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
