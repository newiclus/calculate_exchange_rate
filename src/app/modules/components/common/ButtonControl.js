import React, {Component} from 'react';

class ButtonControl extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const props = this.props;
    let typeButton = "button";

    if (props.typeButton) {
      typeButton = props.typeButton;
    }    

    return (
      <button className={'btn '+ props.btnClass} id={props.idName} type={typeButton} onClick={props.onClick}>
        {props.title}
      </button>
    );
  }
}

export default ButtonControl;