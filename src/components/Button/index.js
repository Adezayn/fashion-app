import React from 'react';
import {Button} from 'react-materialize';

const Index = (props) => {
    const {className,text,handleClick} = props;
    return (
        <Button
        node="button"
        waves="light"
        className={className}
        onClick={handleClick}
        >
         {text}   
        </Button>
    )
}

export default Index;