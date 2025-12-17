import useTheme from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();

  const handleThemeToggle = () => {
    toggleTheme();
    toast.info(
      theme === "dark" ? "Light mode activated" : "Dark mode activated"
    );
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
    toast.info(
      language === "en"
        ? "Dil Türkçe olarak değiştirildi"
        : "Language switched to English"
    );
  };

  return (
    <header className="pt-6 pb-5 bg-white dark:bg-[#252128]">
      <div className="section-wrapper flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-15 w-15 rounded-full bg-[#EEEBFF] dark:bg-[#3730A3] flex items-center justify-center rotate-12">
            <span className="text-[#7B61FF] dark:text-[#8F88FF] text-2xl font-semibold">
              İ
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-4 text-[14px] font-bold tracking-widest text-[#777777]">
            <button
              onClick={handleThemeToggle}
              className={`relative inline-flex h-6 w-14 items-center rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
              }`}
              aria-label="Toggle theme"
              data-cy="theme-toggle"
            >
              <span
                className={`absolute left-1 h-4 w-4 rounded-full transition-transform duration-300 ${
                  theme === "dark"
                    ? "translate-x-6 bg-white"
                    : "translate-x-0 bg-[#FFE86E]"
                }`}
              />
            </button>

            <span>
              {theme === "dark"
                ? content.header.darkMode
                : content.header.lightMode}
            </span>

            <span>|</span>

            <button onClick={handleLanguageToggle} data-cy="language-toggle">
              {language === "en" ? (
                <>
                  <span className="text-[#4731D3] dark:text-[#8F88FF]">
                    TÜRKÇE
                  </span>
                  <span className="text-[#777777]">'YE GEÇ</span>
                </>
              ) : (
                <>
                  <span className="text-[#4731D3] dark:text-[#8F88FF]">
                    SWITCH
                  </span>
                  <span className="text-[#777777]"> TO EN</span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-col items-end gap-3 text-lg font-medium text-[#6B7280] sm:flex-row sm:items-center sm:gap-6 dark:text-[#AEBCCF]">
            <a
              href="#skills-section"
              className="transition-colors hover:text-[#1F2937] dark:hover:text-white"
            >
              {content.header.skills}
            </a>
            <a
              href="#projects-section"
              className="transition-colors hover:text-[#1F2937] dark:hover:text-white"
            >
              {content.header.projects}
            </a>
            <a
              href="#footer-section"
              className="rounded-md border border-[#3730A3] px-6 py-2 text-[#3730A3] transition-colors hover:bg-[#F4F2FF] dark:bg-white"
            >
              {content.header.hireMe}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
