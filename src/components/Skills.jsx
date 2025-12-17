import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { content } = useLanguage();

  return (
    <section id="skills-section" className="py-12">
      <div className="section-wrapper space-y-12">
        <h2 className="text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#AEBCCF]">
          {content.skills.title}
        </h2>

        <div className="grid gap-y-12 md:grid-cols-3 md:gap-8">
          {content.skills.items.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[30px] font-medium leading-7 text-[#4338CA] dark:text-[#BAB2E7]">
                {skill.name}
              </h3>

              <p className="max-w-[320px] text-sm leading-6 text-[#6B7280] dark:text-white">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
