import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";

const Footer = () => {
  return (
    <footer className="w-full border-t border-primary-slate/20 py-10 page-section-x">
      <div className="page-container w-full md:pb-[50px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="col-span-1 pb-6 md:pb-0">
          <p className="font-nunito text-text-gray leading-[1.5]">A part of...</p>
          <a
            href="https://silentbook.club/"
            className="inline-block mt-2 focus-ring rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/SBC-Logo-Main-1C-Slate.png" alt="Silent Book Club" className="h-16" />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-primary-slate font-nunito font-bold text-[22px] lg:text-[25px] leading-[1.5] md:text-right">
            Contact Us
          </h2>
          <div className="flex md:flex-row-reverse gap-6">
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/sbcstourbridge/"
                className="focus-ring rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram (opens in new tab)"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/groups/2025872474496394/"
                className="focus-ring rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Facebook group (opens in new tab)"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
