/* eslint-disable react/prop-types */
import image1 from "/vroom.png";
import image2 from "/backgen.png";
import image3 from "/course.png";
import { motion } from "framer-motion";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
const projectsData = [
  {
    image: image1,
    title: "V-Room",
    description:
      "V-Room is a app built with Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "getstream",
      "shadcn",
      "Tailwind CSS",
    ],
    flag: true,
    domain: "https://v-room-bay.vercel.app/",
    githublink: "https://github.com/lvanish/v-room",
  },
  {
    image: image3,
    title: "Course Selling App",
    description:
      "Course selling App with seperate dashboards for admin and user to sell and purchase courses",
    technologies: ["Next.js", "Mongodb", "MaterialUI"],
    flag: false,
    githublink: "https://github.com/lvanish/course-app",
  },
  {
    image: image2,
    title: "Background Generator",
    description:
      "Single Page Application which gives RGBA values that you can use to generate beautiful backgrounds for your websites",
    technologies: ["HTML", "CSS", "JavaScript"],
    flag: true,
    domain: "https://lvanish.github.io/background-generator/",
    githublink: "https://github.com/lvanish/background-generator",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row text-xl font-semibold gap-4">
              {project.title}
              {project.flag && (
                <BsLink45Deg
                  className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500"
                  onClick={() => {
                    window.open(
                      project.domain,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                />
              )}
              <BsGithub
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500"
                onClick={() => {
                  window.open(
                    project.githublink,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              />
            </div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
