import React from "react";
import { HelloProps } from "../../type.modal";
import styled from "styled-components";
import { Card } from "antd";
const StyledWrapper = styled.section`
  .size-card {
    width: 100%;
    height: 256px;
  }
  .des-text {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
  }
  .ant-card-body {
    padding: 12px !important;
  }
  .title-text {
    font-size: 15px;
  }
  .des-text {
    font-size: 13px;
  }
`;

const ListCard: React.FC<HelloProps> = (props) => {
  const img = props?.img ?? "";
  const title = props?.title ?? "";
  const des = props?.des ?? "";
  return (
    <StyledWrapper>
      <Card
        className="size-card"
        hoverable
        cover={<img src={img} alt="" height="130px" />}
      >
        <p className="title-text">{title}</p>
        <span className="des-text">{des}</span>
      </Card>
    </StyledWrapper>
  );
};

export default ListCard;
