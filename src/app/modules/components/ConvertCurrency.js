import React from 'react';
import InputControl from "./common/InputControl";

function ConvertCurrency (props) {
  return (
    <div className="col-md-6">
      <InputControl placeholder={props.placeholder} readOnly={true} value={props.result} />
    </div>
  );
}

export default ConvertCurrency;