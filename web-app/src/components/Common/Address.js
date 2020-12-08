import React from 'react';

const Address = (props) => {
  const data = props.data;
  if (!data) {
    return "";
  }

  function isMultiLine() {
    return (data.city && data.city.trim().length > 0)
      || (data.state && data.state.trim().length > 0)
      || (data.zip && data.zip.trim().length > 0);
  }

  function citySegment() {
    if (!data.city) {
      return "";
    }
    if (data.city.trim().length > 0
      && (!data.state || data.state.trim().length === 0)) {
      return data.city;
    }
    return data.city + ", ";
  }

  return (
    <div className="address">
      {data.Address && <span role="img" aria-label="house">🏠</span>} {data.Address}
      {data.unit && data.unit.trim().length > 0 && <br />}
      {data.unit && data.unit.trim().length > 0 && data.unit }
      {isMultiLine() && <br />}
      { isMultiLine() &&
        <span>
        { citySegment() }
        {data.state && data.state.trim().length > 0 && data.state }
        {data.zip && data.zip.trim().length > 0 && <span> {data.zip}</span> }
        </span>
      }
    </div>
  );
}

export default Address;
