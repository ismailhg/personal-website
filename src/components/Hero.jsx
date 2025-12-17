import { useLanguage } from "../context/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linked-in.svg";

const Hero = () => {
  const { content } = useLanguage();

  const handleHireMe = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: "Ismail contacted",
        action: "Hire Me Clicked",
      })
      .then((res) => {
        toast.success(`Message sent successfully!`);
        console.log("Response:", res.data);
      })
      .catch((err) => {
        toast.error(`Message can't sent !!`);
        console.error("Error:", err);
      });
  };

  return (
    <section id="hero-section" className="py-12">
      <div className="section-wrapper flex flex-col-reverse items-center gap-16 lg:flex-row">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-6 text-[#4338CA] dark:text-[#8F88FF]">
            <span className="block h-px w-24 bg-[#4338CA] dark:bg-[#8F88FF]" />
            <span className="text-lg font-medium tracking-[0.4em]">
              {content.hero.name}
            </span>
          </div>

          <h1 className="text-[48px] sm:text-[60px] md:text-[72px] leading-[1.1] font-bold text-[#1F2937] dark:text-[#AEBCCF]">
            {content.hero.title}
          </h1>

          <p className="max-w-[152] text-lg leading-7 text-[#6B7280] dark:text-white">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-8">
            <button
              onClick={handleHireMe}
              className="rounded-md px-8 py-3 text-lg font-medium text-white dark:text-black bg-[#3730A3] dark:bg-[#E1E1FF]"
            >
              {content.hero.hireButton}
            </button>

            <a
              href="https://github.com/ismailhg"
              target="_blank"
              className="
                inline-flex items-center gap-3 rounded-md px-5 py-3 text-lg font-medium
                border bg-white text-[#3730A3]
                dark:bg-[#383838] border-[#3730A3]
                dark:text-[#BAB2E7] dark:border-[#E1E1FF]
              "
            >
              <img src={githubIcon} alt="Github" className="h-6 w-6" />
              {content.hero.githubButton}
            </a>

            <a
              href="https://www.linkedin.com/in/ismailhakkigundogdu"
              target="_blank"
              className="
                inline-flex items-center gap-3 rounded-md px-5 py-3 text-lg font-medium
                border bg-white text-[#3730A3]
                dark:bg-[#383838] border-[#3730A3]
                dark:text-[#BAB2E7] dark:border-[#E1E1FF]
              "
            >
              <img src={linkedinIcon} alt="Linkedin" className="h-6 w-6" />
              {content.hero.linkedinButton}
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/pp.jpg"
              alt="Profil foto"
              className="h-50 sm:h-80 md:h-110 w-full object-cover rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
