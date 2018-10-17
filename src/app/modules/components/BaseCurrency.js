import React from 'react';
import InputControl from "./common/InputControl";

function BaseCurrency (props) {
  return (
    <div className="col-md-6 currency_base">
      <InputControl 
        idName={props.idName} 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        type="number"
        prepend={props.prepend} />
    </div>
  );
}

export default BaseCurrency;