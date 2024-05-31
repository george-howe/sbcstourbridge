import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import Mail from "../icons/mail.tsx";



const Footer = () => {
  return (
    <footer className="w-full border border-gray-300 py-10">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto md:pb-[50px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <img src="/logo.png" alt="Logo" className="h-24 inline-block" />
          
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-nunito font-bold text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-mulish text-text-gray"
            >
              About Us
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-nunito font-bold text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              {/* <a href="/">
                <Facebook />
              </a> */}
              <a href="https://www.instagram.com/sbcstourbridge/">
                <Instagram />
              </a>
              <a href="https://www.meetup.com/silent-book-club-stourbridge/">
                <img src="/meetup.svg" alt="" className="w-[18px]"/>
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
