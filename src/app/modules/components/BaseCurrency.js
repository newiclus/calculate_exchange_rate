import React from 'react';
import InputControl from "./common/InputControl";

function BaseCurrency (props) {
  return (
    <div className="col-md-6 currency_base">
      <InputControl placeholder={props.placeholder} onChange={props.onChange} type="number" />
    </div>
  );
}

export default BaseCurrency;