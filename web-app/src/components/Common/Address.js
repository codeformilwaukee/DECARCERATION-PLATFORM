import React from 'react';

const Address = (props) => {

  function isMultiLine(props) {
    return (props.city && props.city.trim().length > 0)
      || (props.state && props.state.trim().length > 0)
      || (props.zip && props.zip.trim().length > 0);
  }

  function citySegment(props) {
    if (!props.city) {
      return "";
    }
    if (props.city.trim().length > 0
      && (!props.state || props.state.trim().length === 0)) {
      return props.city;
    }
    return props.city + ", ";
  }

  return (
    <div className="address">
      Address: {props.address}
      {props.unit && props.unit.trim().length > 0 && <br />}
      {props.unit && props.unit.trim().length > 0 && props.unit }
      {isMultiLine(props) && <br />}
      { isMultiLine(props) &&
        <span>
        { citySegment(props) }
        {props.state && props.state.trim().length > 0 && props.state }
        {props.zip && props.zip.trim().length > 0 && <span> {props.zip}</span> }
        </span>
      }
    </div>
  );
}

export default Address;