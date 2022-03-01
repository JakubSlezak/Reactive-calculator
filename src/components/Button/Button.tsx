import React from "react";

//interface
import { ButtonProps } from './ButtonProps';

//styles
import css from './Button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
    const { value, onClickHandler = () => {} } = props;

    return (
        <div className={css.buttonWrapper}>
            <button className={css.buttonValue} onClick={() => onClickHandler(value)}>{value}</button>
        </div>
    );
};
