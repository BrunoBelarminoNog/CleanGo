import React from "react";

import {
  Item,
  NumberButton,
  ValueOutput,
  ButtonOp,
  HandlerWrapper,
} from "./styles";

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  maxValue?: number;
  minValue?: number;
  setValue: (value: string) => void;
}

const InputNumber = ({
  name,
  value,
  setValue,
  maxValue,
  minValue = 1,
  ...rest
}: InputNumberProps) => {
  const handleIncrease = () => {
    maxValue
      ? parseInt(value) < maxValue && setValue(`${parseInt(value) + 1}`)
      : setValue(`${parseInt(value) + 1}`);
  };
  const handleDecrese = () => {
    minValue
      ? parseInt(value) > minValue && setValue(`${parseInt(value) - 1}`)
      : parseInt(value) > 1 && setValue(`${parseInt(value) - 1}`);
  };
  return (
    <Item>
      <NumberButton
        type="number"
        name={name}
        value={value}
        {...rest}
        required
      />

      <HandlerWrapper>
        <ButtonOp
          disable={parseInt(value) === minValue}
          onClick={handleDecrese}
          isLeft
        >
          -
        </ButtonOp>
        <ValueOutput>{value}</ValueOutput>
        <ButtonOp
          disable={parseInt(value) === maxValue}
          onClick={handleIncrease}
        >
          +
        </ButtonOp>
      </HandlerWrapper>
    </Item>
  );
};

export default InputNumber;
