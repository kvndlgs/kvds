import LiquidEther from './LiquidEther';


const HeroBackground = () => {
  return (
    <div className="-z-10, w-screen h-screen absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50 backdrop-blur-3xl" >
      <LiquidEther
        colors={['#c95e8d', '#efa79e93', '#efa79e93']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  )
};

export default HeroBackground;

