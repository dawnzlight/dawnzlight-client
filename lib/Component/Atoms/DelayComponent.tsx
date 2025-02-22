import React, { useState, useEffect } from 'react';
import styles from './styles/fade.module.scss';

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

    return <div className={`${styles.fade_in} ${show ? styles.show : ''}`}>{children}</div>;
};

export default DelayComponent;
