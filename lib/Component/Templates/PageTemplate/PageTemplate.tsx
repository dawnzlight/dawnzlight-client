import React, { memo } from 'react';
import Styled from './style.module.scss';
// import {} from './const';
import { Props } from './type';

import { Header } from '@/Component/Organisms/Header';
import { Footer } from '@/Component/Organisms/Footer';

export const PageTemplate: React.FC<Props> = memo((props) => {
    return (
        <div>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
});

PageTemplate.displayName = 'PAGETEMPLATE';
