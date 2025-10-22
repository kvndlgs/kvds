import LiquidEther from './LiquidEther';


const HeroBackground = () => {
  return (
    <div style={{ zIndex: -10, width: '100%', top: 0, left: 0, bottom: 0, right: 0, height: '100%', position: 'absolute', opacity: 0.5 }}>
      <LiquidEther
        colors={['#4a4a4a', '#821723', '#E87D89']}
        mouseForce={10}
        cursorSize={80}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.6}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.6}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={2000}
        autoRampDuration={0.6}
      />
    </div>
  )
};

export default HeroBackground;

