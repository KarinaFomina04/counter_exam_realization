import React from 'react';
import s from './App.module.scss'
import { Counter } from './components/Counter';


export const App =()=> {
  const [count, setCount] = React.useState<number>(0)

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1)
  };

  return (
    <div className={s.App}>
      <Counter 
      count={count} 
      onClickPlus={onClickPlus}
      onClickMinus={onClickMinus}
      />
    </div>
  );
}


