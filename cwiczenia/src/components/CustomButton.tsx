import React from 'react';

interface ButtonProps {
    onClickAction: () => void;
}

const CustomButton:React.FunctionComponent<ButtonProps> = ({onClickAction, children}) => {
    return (
        <button onClick={ onClickAction }>{ children }</button>
    );
}

export default CustomButton;