import { useLanguage } from "../context/LanguageContext";
import projectWorkintech from "../assets/projects-workintech.png";
import projectRandomJokes from "../assets/projects-random-jokes.png";
import projectJourney from "../assets/projects-journey.png";

const Projects = () => {
  const { content } = useLanguage();

  const projectImages = {
    workintech: projectWorkintech,
    "random-jokes": projectRandomJokes,
    journey: projectJourney,
  };

  return (
    <section id="projects-section" className="py-12">
      <div className="section-wrapper">
        <div className="mt-4 h-px w-full bg-[#BAB2E7]"></div>
        <div>
          <h2 className="text-[48px] mt-8 mb-8 font-semibold leading-none text-[#1F2937] dark:text-[#AEBCCF]">
            {content.projects.title}
          </h2>
        </div>

        <div className="grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-30">
          {content.projects.items.map((project, index) => (
            <div key={index} className="max-w-75 space-y-4">
              <div className="h-45 w-full overflow-hidden rounded-lg">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#BAB2E7]">
                {project.title}
              </h3>
              <p className="text-sm leading-tight text-[#6B7280] dark:text-white">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded border border-[#3730A3] dark:border-[#8F88FF] px-4 py-1 text-xs font-medium tracking-tight text-[#3730A3] dark:text-[#8F88FF] dark:bg-[#383838]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-base font-medium text-[#3730A3] dark:text-[#E1E1FF]">
                <a href="#" className="underline">
                  {project.links.github}
                </a>
                <a href="#" className="underline">
                  {project.links.view}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
