import * as React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Row, Col, Typography, Input, Space } from "antd"; 

const { Text, Title, Paragraph } = Typography;

const StockSelectionContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 40px;
   background: #f2f3f6;
`;

const SelectInput = styled(Input)`
   &.ant-input-lg {
      font-size: 36px;
      text-align: center;
      color: #000000;
      border-radius: 16px;
      border: none;
   }
`;

const SelectionTitle = styled(Title)`
   &.ant-typography {
      font-size: 26px;
      color: #000000;
   }
`;

const SelectionParagraph = styled(Paragraph)`
   &.ant-typography {
      color: #000000;
      font-size: 16px;
   }
`;

const Selection = () => {
   return (
      <>
         <Row>
            <Col span={24}>
               <StockSelectionContainer>
                  <SelectionTitle style={{ marginBottom: "28px" }}>
                     Selecione os ativos que deseja comparar
                  </SelectionTitle>

                  <section style={{ display: "flex", justifyContent: "space-between", width: "600px" }}>
                     <Space size="large">
                        <SelectInput size="large" placeholder="IBOV" value="IBOV" />
                        <Text style={{ fontSize: "26px", fontWeight: "bold" }}>X</Text>
                        <SelectInput size="large" placeholder="PETR4" value="PETR4" />
                     </Space>
                  </section>

                  <SelectionParagraph style={{ marginTop: "20px" }}>Configurações avançadas</SelectionParagraph>
               </StockSelectionContainer>
            </Col>
         </Row>
      </>
   );
};

export default Selection;