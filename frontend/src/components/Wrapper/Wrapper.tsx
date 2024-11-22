import React from 'react';
import block from 'bem-cn-lite';

import './Wrapper.scss';

const b = block('wrapper');

const DARK = 'dark';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
    return (
        <div className={b()}>
            <div className={b('layout')}>
                <div className={b('content')}>{children}</div>
            </div>
        </div>
    );
};
