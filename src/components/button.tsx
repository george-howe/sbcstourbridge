import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
  rsvpLink?: string;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", text = "Default Text", type = "button", rsvpLink = "" } = props;

  const defaultStyles =
    "ml-auto rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-nunito leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px]";
  const bgClass = variant === "primary" ? "bg-primary-slate" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;

  return (
    <a href={rsvpLink} className="hover:underline text-white ml-auto">
      <button className={className} type={type}>
          {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </button>
    </a>
  );
};

export default Button;
