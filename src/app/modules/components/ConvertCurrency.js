import React from 'react';
import InputControl from "./common/InputControl";

function ConvertCurrency (props) {
  return (
    <div className="col-md-6">
      <InputControl 
        idName={props.idName} 
        placeholder={props.placeholder} 
        prepend={props.prepend} 
        readOnly={true} 
        value={props.result} />
    </div>
  );
}

export default ConvertCurrency;