import React from 'react';

//interface
import { DisplayProps } from './DisplayProps';

//styles
import css from './Display.module.scss';

export const Display: React.FC<DisplayProps> = ({values}) => {
    return (
        <div className={css.display}>
            <span className={css.hello}>{values}</span>
        </div>
    );
};
        