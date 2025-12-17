import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer id="footer-section" className="py-24 bg-[#F9F9F9] dark:bg-black">
      <div className="section-wrapper flex flex-col gap-10 text-left lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <h2 className="max-w-2xl text-[42px] font-semibold leading-tight text-[#1F2937] dark:text-[#AEBCCF]">
            {content.footer.msg}
          </h2>

          <div className="flex items-center gap-2 text-[#AF0C48] dark:text-[#BAB2E7]">
            <span className="text-2xl leading-6">👉</span>
            <a
              href="#"
              className="text-[20px] font-medium border-b border-current pb-1"
            >
              {content.footer.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-[18px] mr-25 font-medium">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0A14] dark:text-[#E1E1FF]"
          >
            Personal Blog
          </a>

          <a
            href="https://github.com/ismailhg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00AB6B]"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/ismailhakkigundogdu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5]"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
