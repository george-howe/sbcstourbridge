import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import Mail from "../icons/mail.tsx";



const Footer = () => {
  return (
    <footer className="w-full border border-gray-300 py-10">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto md:pb-[50px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 pb-6 md:pb-0">
          <p className="font-nunito">A part of...</p>
          <a href="https://silentbook.club/"><img src="/SBC-Logo-Main-1C-Slate.png" alt="Silent Book Club logo" className="h-16" /></a>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-nunito font-bold text-[22px] lg:text-[25px] leading-none md:text-right">
            Contact Us
          </h5>
          <div className="flex md:flex-row-reverse gap-6">
            <div className="flex gap-5">
              <a href="https://www.instagram.com/sbcstourbridge/">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/groups/2025872474496394/">
                <Facebook />
              </a>
              <a href="mailto:silentbookclubstourbridge@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
