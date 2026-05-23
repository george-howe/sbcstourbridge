import Button from "./button.tsx";

const fieldClass =
  "col-span-1 border-b w-full border-primary-slate outline-none py-3 text-base lg:text-[22px] leading-[1.5] tracking-tight font-jost text-text-gray focus-ring focus:border-primary-slate";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[50px]" aria-label="Contact form">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-nunito font-semibold text-primary-slate text-sm">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-nunito font-semibold text-primary-slate text-sm">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="font-nunito font-semibold text-primary-slate text-sm">
            Subject
          </label>
          <input id="contact-subject" type="text" name="subject" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="font-nunito font-semibold text-primary-slate text-sm">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-message" className="font-nunito font-semibold text-primary-slate text-sm">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            className={`${fieldClass} col-span-2`}
            cols={30}
            rows={10}
            required
          />
        </div>

        <div className="w-full flex justify-end sm:col-span-2">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
