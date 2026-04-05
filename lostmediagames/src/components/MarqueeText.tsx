interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText = ({ text, className = "" }: MarqueeTextProps) => (
  <div className={`overflow-hidden border-y border-primary/40 bg-secondary/50 py-1 ${className}`}>
    <div className="animate-marquee whitespace-nowrap text-sm text-primary">
      {text}
    </div>
  </div>
);

export default MarqueeText;
