import React from 'react';
import {CardPanel} from 'react-materialize';


const Index = ({children}) => {
    return(
    <div>
         <CardPanel className=" hoverable white">
      <span className="white-text">
        {children}
      </span>
    </CardPanel>
    </div>
    );
}




export default Index;