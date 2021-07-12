import React, { useState } from "react";
import { Container } from "./style";
import formatValue from "../../utils/formatedPrice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface LastGainsProps {
  total: number;
}

const LastGains = ({ total }: LastGainsProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <h2>
        Receitas mensal{" "}
        <span onClick={() => setOpen(!open)}>
          {open ? <FaEye /> : <FaEyeSlash />}
        </span>
      </h2>
      <p>{open ? formatValue(total) : "R$ -------"}</p>
    </Container>
  );
};

export default LastGains;
