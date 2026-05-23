import RightPattern from "../icons/right-quote-pattern.tsx";
import LeftPattern from "../icons/left-quote-pattern.tsx";
import Quote from "../icons/quote.tsx";

export interface QuoteProps {
  text: string;
  name: string;
}

const QuoteText = ({ text, name }: QuoteProps) => {
  return (
    <figure className="flex w-full max-w-full lg:max-w-[80%]">
      <span aria-hidden="true"><LeftPattern /></span>
      <div className="flex flex-col w-full items-center justify-center gap-4 lg:gap-8 lg:mx-[-30px]">
        <span aria-hidden="true"><Quote /></span>
        <blockquote className="text-[20px] leading-[1.5] lg:text-[35px] italic tracking-wide font-dm text-primary-slate text-center">
          <p>{text}</p>
        </blockquote>
        <figcaption className="text-text-gray text-base tracking-tight lg:text-[25px] font-jost lg:leading-[1.5] text-center">
          <cite className="not-italic">— {name}</cite>
        </figcaption>
      </div>
      <span aria-hidden="true"><RightPattern /></span>
    </figure>
  );
};

export default QuoteText;
