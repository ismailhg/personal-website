import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { content } = useLanguage();

  return (
    <section id="profile-section">
      <div className="section-wrapper space-y-10">
        <div className="mt-4 h-px w-full mx-auto bg-[#BAB2E7]"></div>
        <div>
          <h2 className="mt-7 text-[48px] font-semibold leading-none text-[#1F2937] dark:text-[#AEBCCF]">
            {content.profile.title}
          </h2>
        </div>

        <div className="grid gap-45 md:grid-cols-[420px_minmax(0,1fr)]">
          <div className="space-y-6">
            <h3 className="text-[30px] font-medium text-[#4338CA] dark:text-[#BAB2E7]">
              {content.profile.basicInfoTitle}
            </h3>
            <div className="space-y-4 text-[18px] leading-9 text-black">
              {Object.entries(content.profile.basicInfo).map(([key, info]) => (
                <div
                  key={key}
                  className="flex flex-col gap-1 md:flex-row md:gap-6"
                >
                  <span className="text-[20px] font-bold  text-black dark:text-white md:w-44">
                    {info.label}
                  </span>
                  <span className="max-w-55 text-[18px] text-black dark:text-white ">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[30px] font-medium text-[#4338CA] dark:text-[#BAB2E7]">
              {content.profile.aboutMeTitle}
            </h3>
            <div className="space-y-4 max-w-130 text-[18px] text-[#6B7280] dark:text-white">
              {content.profile.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
