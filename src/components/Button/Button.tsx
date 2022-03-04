import React from "react";
import { ButtonProps } from './ButtonProps';
import css from './Button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
    const { value, onClickHandler = () => {} } = props;

    return (
        <div className={css.buttonWrapper}>
            <button className={css.buttonValue} onClick={() => onClickHandler(value)}>{value}</button>
        </div>
    );
};
