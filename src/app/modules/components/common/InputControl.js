import React, {Component} from 'react';

class InputControl extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const props = this.props;
    let typeInput = "text";

    if (props.type) {
      typeInput = props.type;
    }
    
    return (
      <div className="form-group">
        <label htmlFor={props.idName}>{props.title}</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">{props.prepend}</div>
          </div>
          <input 
            className="form-control" 
            onChange={props.onChange} 
            type={typeInput} 
            id={props.idName} 
            name={props.idName} 
            placeholder={props.placeholder} 
            value={props.value}
            readOnly={props.readOnly} />
        </div>
      </div>
    );
  }
}

export default InputControl;