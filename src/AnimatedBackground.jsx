const AnimatedBackground = () => {
    const particleCount = 45;

    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">

            <div
                className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-200 bg-[length:100%_100%] animate-gradientShift"
            ></div>


            {/* Floating Particles */}
            {Array.from({ length: particleCount }).map((_, i) => {
                const size = Math.random() * 12 + 6; // particle size: 8px–20px
                const left = Math.random() * 95;     // horizontal position %
                const delay = Math.random() * 10;    // staggered animation delay
                const duration = 5 + Math.random() * 10; // 5–15s duration
                const bottom = Math.random() * 100;  // starting vertical position %

                return (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gray-400 opacity-60 animate-floatParticle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            bottom: `${bottom}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default AnimatedBackground;
