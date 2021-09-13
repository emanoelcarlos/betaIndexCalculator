// import * as React from "react";
// import { useState, useEffect } from "react";
// import "antd/dist/antd.css";
// import styled from "styled-components";
// import { Row, Col, Typography, Input, Space, Button } from "antd";

// const { Text, Title, Paragraph } = Typography;

// const BetaContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

// const BenchmarkSelection = styled.div`
//   width: 20rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding-top: 40px;
//   border-radius: 0.5rem;
//   margin: 1rem;
//   padding: 1rem;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// `;

// const StockSelection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding-top: 40px;
//   border-radius: 0.5rem;
//   margin: 1rem;
//   padding: 1rem;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// `;

// const TickerInput = styled(Input)`
//   &.ant-input-lg {
//     font-size: 36px;
//     text-align: center;
//     color: #000000;
//     border-radius: 16px;
//   }
// `;

// const SelectionTitle = styled(Title)`
//   &.ant-typography {
//     font-size: 26px;
//     color: #000000;
//   }
// `;

// const SelectionParagraph = styled(Paragraph)`
//   &.ant-typography {
//     color: #000000;
//     font-size: 16px;
//   }
// `;

// const MenuButton = styled(Button)`
//   margin-top: 1.5rem;
// `;

// const Selection = (props) => {
//   const [stockA, setstockA] = useState("BOVA11");
//   const [stockB, setstockB] = useState("PETR4");

//   return (
//     <>
//       <Row>
//         <Col span={24}>
//           <BetaContainer>
//             <BenchmarkSelection>
//               <SelectionTitle style={{ marginBottom: "28px" }}>Selecione o índice que deseja comparar</SelectionTitle>
//               <TickerInput size="large" placeholder="Ticker 1" onInput={(e) => setstockA(e.target.value)} value={stockA.toUpperCase()} />
//             </BenchmarkSelection>

//             <StockSelection>
//               <SelectionTitle style={{ marginBottom: "28px" }}>Selecione os ativos da sua carteira</SelectionTitle>

//               <section
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   maxWidth: "600px",
//                 }}
//               >
//                 <TickerInput size="large" placeholder="Ticker" onInput={(e) => setstockA(e.target.value)} value={stockA.toUpperCase()} />
//               </section>
//             </StockSelection>
//           </BetaContainer>
//         </Col>
//       </Row>
//       <Row justify="center">
//         <Col span={8}></Col>
//         <Col span={8}>
//           <div>
//             <MenuButton onClick={() => props.calculateBeta({ stockA: stockA, stockB: stockB })} block size="large">
//               Calcular
//             </MenuButton>
//             <SelectionParagraph style={{ marginTop: "20px" }}>Configurações avançadas</SelectionParagraph>
//             {/* <section style={{ display: "flex", justifyContent: "space-between", maxWidth: "600px" }}></section> */}
//           </div>
//         </Col>
//         <Col span={8}></Col>
//       </Row>
//     </>
//   );
// };

// export default Selection;

import * as React from "react";
import { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Form, Row, Col, Typography, Input, InputNumber, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const BetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BenchmarkSelection = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const StockSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const StockList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const TickerInput = styled(Input)`
  &.ant-input-lg {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    border-radius: 0.5rem;
    border: none;
    max-width: 10rem;
    margin: 1rem;
    border: solid 1px #b3b3b3;
  }
`;

const SelectionTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.5rem;
    color: #000000;
  }
`;

const SelectionParagraph = styled(Paragraph)`
  &.ant-typography {
    color: black;
    font-size: 1rem;
  }

  &:hover {
    font-weight: bold;
  }
`;

const MenuButton = styled(Button)`
  margin-top: 1.5rem;
  background-color: #ffb038;
  color: black;
  border-radius: 0.5rem;
  max-width: 25rem;
`;

const Selection = (props) => {
  const [benchmark, setBenchmark] = useState("BOVA11");
  const [stockList, setStockList] = useState(["WEGE3"]);
  const [isAddingTicker, setIsAddingTicker] = useState(false);
  const [tickerToAdd, setTickerToAdd] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const updateStockList = (tickerIndex) => {
    setStockList(stockList.filter((element, index) => index !== tickerIndex));
  };

  const addTicker = (tickerName) => {
    setStockList([...stockList, tickerName]);
    setIsAddingTicker(false);
    setTickerToAdd("");
  };

  const onPressENTER = (event) => {
    if (event.key === "Enter") addTicker(tickerToAdd);
    if (event.keyCode === 27) {
      setIsAddingTicker(false);
      setTickerToAdd("");
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <BetaContainer>
            <BenchmarkSelection>
              <SelectionTitle style={{ marginBottom: "1rem" }}>Selecione o índice que deseja comparar</SelectionTitle>
              <TickerInput size="large" placeholder="TICKER" onInput={(e) => setBenchmark(e.target.value)} value={benchmark.toUpperCase()} />
            </BenchmarkSelection>

            <StockSelectionContainer>
              <SelectionTitle style={{ marginBottom: "1rem" }}>Selecione os ativos que deseja compor a carteira</SelectionTitle>

              <StockList>
                {stockList.map((ticker, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#e6e6e6",
                        height: "1.2rem",
                        width: "1.2rem",
                        position: "absolute",
                        top: ".6rem",
                        right: ".6rem",
                        zIndex: "1000",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CloseOutlined onClick={() => updateStockList(index)} style={{ fontSize: "0.8rem" }} />
                    </div>
                    <TickerInput size="large" placeholder="IBOV" value={ticker} style={{ maxWidth: "10rem", margin: "1rem", border: "solid 1px #b3b3b3" }} />
                  </div>
                ))}

                {isAddingTicker ? (
                  <TickerInput
                    size="large"
                    placeholder="ABCD4"
                    style={{ maxWidth: "10rem", margin: "1rem", border: "solid 1px #b3b3b3" }}
                    value={tickerToAdd.toUpperCase()}
                    onInput={(e) => setTickerToAdd(e.target.value)}
                    onKeyDown={onPressENTER}
                  />
                ) : (
                  <SelectionParagraph onClick={() => setIsAddingTicker(true)} style={{ fontWeight: "bold", cursor: "pointer", margin: "1rem" }}>
                    Adicionar ativo
                  </SelectionParagraph>
                )}
              </StockList>

              <MenuButton onClick={() => props.calculateBeta(benchmark, stockList)} block size="large">
                Analisar
              </MenuButton>

              <SelectionParagraph
                style={{ marginTop: "20px", cursor: "pointer" }}
                onClick={() => {
                  setShowSettings(!showSettings);
                }}
              >
                Configurações avançadas
              </SelectionParagraph>

              {showSettings && (
                <section style={{ width: "100%" }}>
                  <Form name="basic" labelCol={{ span: 12 }} wrapperCol={{ span: 2 }}>
                    <Form.Item label="Dias de cotação" rules={[{ required: true, message: "Informe a quantidade de dias de cotação" }]}>
                      <InputNumber value={props.lastNDays} onChange={props.setLastNDays} />
                    </Form.Item>

                    <Form.Item label="Número de Portfolios" rules={[{ required: true, message: "Informe a quantidade de portfolios" }]}>
                      <InputNumber value={props.portfolioQuantity} onChange={props.setPortfolioQuantity} />
                    </Form.Item>
                  </Form>
                </section>
              )}
            </StockSelectionContainer>
          </BetaContainer>
        </Col>
      </Row>
    </>
  );
};

export default Selection;
