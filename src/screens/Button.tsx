import {styles} from './styles';

import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  style: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}>
      {children}
    </Button>
  );
};

export default Button;
