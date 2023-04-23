import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
        padding: '10px',
        flex: 1,
        borderRadius: '140px',
        fontWeight: 'bold',
        fontSize: '0.875rem'
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
        padding: '1.5rem 2rem',
        flex: 1,
        borderRadius: '140px',
        fontWeight: 'bold',
        fontSize: '0.875rem'
      }
    }
  }

  return (
    <button
      className="px-2 py-1.5 flex-1 rounded-md"
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton