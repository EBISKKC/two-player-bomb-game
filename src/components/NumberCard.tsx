import React from 'react';

interface Props {
  number: number;
  disabled: boolean;
  onClick: (n: number) => void;
}

export const NumberCard: React.FC<Props> = ({ number, disabled, onClick }) => (
  <button
    disabled={disabled}
    onClick={() => onClick(number)}
    style={{
      width: 48,
      height: 48,
      margin: 4,
      background: disabled ? '#ddd' : '#fff',
      border: '1px solid #333',
      borderRadius: 4,
    }}
  >
    {number}
  </button>
);