import React from 'react';
import { useCallback } from "react";
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import Introduction from '../introduction/introduction';
import SpiderMan from '../spiderman/spiderman';

const Snowflakes = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  
    const particleColors = ['#915eff', '#2f2465', '#000000'];

  return (
    <div style={{ top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <SpiderMan />
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 6,
                            opacity: 0.4
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColors,
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        opacity: 0.5,
                        width: 1,
                        enable: false
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <Introduction />
        <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center`}><a href="#overview"><div className={`w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2`}><div className="action-slider w-3 h-3 rounded-full bg-secondary mb-1 bg-white"></div></div></a></div>
    </div>
  );
};

export default Snowflakes;
