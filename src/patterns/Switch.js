import React from 'react';

//toggle is from props?
export const Switch = props => {
  const {on, ...rest} = props;
  const ss = on ? 'On' : 'Off';

  return (
    <div style={{margin: 20}}>
      <input
        type="checkbox"
        value={ss}
        {...rest} />
      <label>Props: The checkbox is {ss}</label>
    </div>
  )
}
