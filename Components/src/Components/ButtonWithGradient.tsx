import React from 'react';
import './ButtonWithGradient.css';

export interface ButtonWithGradientProps {
  text?: string;
  children?: React.ReactNode;
}

const ButtonWithGradient: React.FC<ButtonWithGradientProps> = ({ text, children }) => {
  return (
    <button className="btn-with-gradient">
      {text || children}
    </button>
  );
};

export default ButtonWithGradient;
