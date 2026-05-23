import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <aside
      className="col-span-1 bg-primary-clay/20 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full"
      aria-label="Contact details"
    >
      <p className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight leading-[1.5] text-primary-slate">
        <Mail aria-hidden="true" />
        <a href="mailto:info@yourdomain.com" className="hover:underline focus-ring rounded-sm">
          info@yourdomain.com
        </a>
      </p>
      <p className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight leading-[1.5] text-primary-slate">
        <Phone aria-hidden="true" />
        <a href="tel:+13784001234" className="hover:underline focus-ring rounded-sm">
          +1 (378) 400-1234
        </a>
      </p>
      <p className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight leading-[1.5] text-primary-slate">
        <Web aria-hidden="true" />
        <a
          href="https://www.yourdomain.com"
          className="hover:underline focus-ring rounded-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.yourdomain.com
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>
    </aside>
  );
};

export default ContactInfo;
