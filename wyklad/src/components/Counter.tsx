import React from 'react';

interface CounterProps {
    initialCounterNumber?: number;
    onNumberChange?: (num : number) => void;
}

const Counter:React.FunctionComponent<CounterProps> = ({initialCounterNumber, onNumberChange}) => {
    const [counterNumber, setCounterNumber] = React.useState(initialCounterNumber || 0);

    const increaseCounterNumber = () => {
        const num = counterNumber + 1;
        setCounterNumber(num);
        onNumberChange && onNumberChange(num);
    }

    const decreaseCounterNumber = () => {
        const num = counterNumber - 1;
        setCounterNumber(num);
        onNumberChange && onNumberChange(num);
    }

    return (
        <div>
            <button onClick={decreaseCounterNumber}>-</button>
            { counterNumber }
            <button onClick={increaseCounterNumber}>+</button>
        </div>
    );
}

export default Counter;