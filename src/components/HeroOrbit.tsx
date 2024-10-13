const HeroOrbit = ({children, size, rotate}: { children: React.ReactNode, size: number, rotate: number}) => {
  return (
    <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-start justify-start" style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotate}deg)`}}>
        <div className="inline-flex" style={{ transform: `rotate(${rotate * -1}deg)`}}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
