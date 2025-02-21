import React, { useState, useEffect } from 'react';

interface DelayComponentProps {
    delay: number;
    children: React.ReactNode;
}

const DelayComponent: React.FC<DelayComponentProps> = ({ delay, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return <>{show ? children : null}</>;
};

export default DelayComponent;
