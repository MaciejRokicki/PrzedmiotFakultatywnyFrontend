import React from 'react';

interface ButtonProps {
    onClickAction: () => void;
}

const CustomButton:React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <button onClick={ props.onClickAction }>{ props.children }</button>
    );
}

export default CustomButton;