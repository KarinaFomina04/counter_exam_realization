import React from 'react';
import s from '../App.module.scss'

type PropsType = {
    count: number;
    onClickPlus: () => void;
    onClickMinus: () => void;
}


export const Counter = (props: PropsType) => {

    const onClickMinusHandler = () => {
        props.onClickMinus();
    };
    const onClickPluHandler = () => {
        props.onClickPlus();
    };

    return (
        <div>
            <h2>Counter:</h2>
            <h1>{props.count}</h1>
            <div className={s.Buttons}>
                <button disabled={props.count === -5} onClick={onClickMinusHandler} className={s.minus}>- Minus</button>
                <button disabled={props.count === 5} onClick={onClickPluHandler} className={s.plus}>Plus +</button>
            </div>
        </div>
    )
}

