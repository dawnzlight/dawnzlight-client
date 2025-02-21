import { Flex } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
    animationData: any;
    width: number;
    height: number;
    delay?: number;
    onComplete?: () => void;
    path: string; // Add path prop
}

const LottieButton: React.FC<Props> = ({
    animationData,
    width,
    height,
    delay = 0,
    onComplete,
    path, // Destructure path prop
}) => {
    const [isClient, setIsClient] = useState(false);
    const lottieContainer = useRef<HTMLDivElement>(null);
    const animationInstanceRef = useRef<any>(null);
    const router = useRouter(); // Initialize router

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isClient && lottieContainer.current) {
            timeoutId = setTimeout(() => {
                import('lottie-web').then((lottie) => {
                    animationInstanceRef.current = lottie.default.loadAnimation({
                        container: lottieContainer.current as Element,
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        animationData: animationData,
                    });

                    animationInstanceRef.current.addEventListener('complete', () => {
                        if (onComplete) {
                            onComplete();
                        }
                    });
                });
            }, delay);
        }

        return () => {
            if (animationInstanceRef.current) {
                animationInstanceRef.current.destroy();
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isClient, delay, animationData, onComplete]);

    const handleMouseEnter = () => {
        if (animationInstanceRef.current) {
            animationInstanceRef.current.goToAndPlay(0, true);
        }
    };

    const handleClick = () => {
        console.log('clicked');
        router.push(path); // Navigate to the specified path
    };

    if (!isClient) {
        return (
            <Flex
                justifyContent='center'
                alignItems='center'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#202020',
                }}
            />
        );
    }

    return (
        <div
            ref={lottieContainer}
            style={{ height: height, width: width }}
            onClick={handleClick} // Use handleClick for onClick event
            onMouseEnter={handleMouseEnter}
        />
    );
};

export default LottieButton;
