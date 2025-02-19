import { Flex } from '@chakra-ui/react';
import { on } from 'events';
import React, { useRef, useState, useEffect } from 'react';

interface Props {
    animationData: any;
    width: number;
    height: number;
    delay?: number;
    onComplete?: () => void;
}

const LottieAnimation: React.FC<Props> = ({
    animationData,
    width,
    height,
    delay = 0,
    onComplete,
}) => {
    const [isClient, setIsClient] = useState(false);
    const lottieContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let animationInstance: any;
        let timeoutId: NodeJS.Timeout;

        if (isClient && lottieContainer.current) {
            timeoutId = setTimeout(() => {
                import('lottie-web').then((lottie) => {
                    animationInstance = lottie.default.loadAnimation({
                        container: lottieContainer.current as Element,
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        animationData: animationData,
                    });

                    animationInstance.addEventListener('complete', () => {
                        if (onComplete) {
                            onComplete();
                        }
                    });
                });
            }, delay);
        }

        return () => {
            if (animationInstance) {
                animationInstance.destroy();
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isClient, delay, animationData, onComplete]);

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

    return <div ref={lottieContainer} style={{ height: height, width: width }} />;
};

export default LottieAnimation;
