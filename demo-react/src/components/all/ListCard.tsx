import React, { useState } from "react";
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
  const [imgUrl] = useState<string>(img);
  const [titleText] = useState<string>(title);
  const [desText] = useState<string>(des);

  return (
    <StyledWrapper>
      <Card
        className="size-card"
        hoverable
        cover={<img src={imgUrl} alt="" height="130px" />}
      >
        <p className="title-text">{titleText}</p>
        <span className="des-text">{desText}</span>
      </Card>
    </StyledWrapper>
  );
};

export default ListCard;
