import React from "react";

//interface
import { ButtonProps } from './ButtonProps';

//styles
import css from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({value}) => {
    return (
        <div className={css.buttonWrapper}>
            <button className={css.buttonValue}>{value}</button>
        </div>
    );
};
