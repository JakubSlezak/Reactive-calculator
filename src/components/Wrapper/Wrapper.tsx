import React, { useState } from "react";
import { Display } from '../Display/Display';
import { Button } from '../Button/Button';
import { WrapperProps } from './WrapperProps';
import css from './Wrapper.module.scss';

export const Wrapper: React.FC<WrapperProps> = () => {
    const [state, setState] = useState('0');
    const list = ['(', ')', '%', '+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', 'C', '0', '.', '='];

    return (
        <div className={css.wrapper}>
            <Display values={state} />
            <div className={css.row}>
                {list.map((item) => (<Button onClickHandler={(item) => setState(item)} value={item} />))}
            </div> 
        </div>
    );
};
