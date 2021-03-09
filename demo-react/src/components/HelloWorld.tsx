import React from "react";
import { HelloProps } from "../type.modal";
import { Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
const StyledWrapper = styled.h1`
  .red-title {
    color: red;
  }
`;

const HelloWord: React.FC<HelloProps> = (props) => {
  const { name } = props;
  return (
    <StyledWrapper>
      <p className="red-title">Hello {name}</p>
      <Button type="primary">Button</Button>
    </StyledWrapper>
  );
};

export default HelloWord;
