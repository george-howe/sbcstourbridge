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
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-nunito leading-[1.5] tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] focus-ring";
  const bgClass = variant === "primary" ? "bg-primary-slate" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass} hover:underline`;
  const isExternalLink = rsvpLink.startsWith("http://") || rsvpLink.startsWith("https://");

  if (type === "submit" || !rsvpLink) {
    return (
      <button type={type} className={className}>
        {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </button>
    );
  }

  return (
    <a
      href={rsvpLink}
      className={className}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    >
      {text}
      {isExternalLink ? <span className="sr-only"> (opens in new tab)</span> : null}
      {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
    </a>
  );
};

export default Button;
