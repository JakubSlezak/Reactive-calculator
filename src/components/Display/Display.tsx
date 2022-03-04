import React from 'react';
import { DisplayProps } from './DisplayProps';
import css from './Display.module.scss';

export const Display: React.FC<DisplayProps> = ({values}) => {
    return (
        <div className={css.display}>
            <span className={css.hello}>{values}</span>
        </div>
    );
};
        