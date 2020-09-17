import * as React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const allDates = ["28/09/2020", "29/09/2020", "30/09/2020", "01/10/2020", "02/10/2020", "03/10/2020", "04/10/2020"];

const ibovData = [
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
];

const petrData = [
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: 0.93 },
   { last: 9.78, max: 9.88, min: 9.81, var: -0.93 },
];

const ResultTableHeader = styled.div`
   border-top: 1px solid black;
   border-bottom: 1px solid black;
   padding: 2px;
`;

const ResultTableData = styled.td`
   line-height: 1.8rem;
   text-align: center;
`;

const PositiveVariationMark = styled.div`
   padding: 2px 8px;
   background-color: #d8f9ef;
   display: inline;
`;

const NegativeVariationMark = styled.div`
   padding: 2px 8px;
   background-color: #ffe2e1;
   display: inline;
`;

const Historic = () => {
   return (
      <section style={{ marginTop: "4rem" }}>
         <Title>Histórico utilizado</Title>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            {/* <table style={{ width: "600px" }}> */}
            <table style={{ borderSpacing: 10 }}>
               <thead>
                  <tr
                     style={{
                        fontWeight: 500,
                        fontSize: "1.2rem",
                        textAlign: "left",
                        color: "#000000",
                     }}
                  >
                     <th></th>
                     <th colSpan={4} style={{ paddingLeft: "12px" }}>
                        IBOV
                     </th>
                     <th colSpan={4} style={{ paddingLeft: "12px" }}>
                        PETR4
                     </th>
                  </tr>

                  <tr
                     style={{
                        fontSize: "1.1rem",
                        textAlign: "center",
                        color: "#000000",
                     }}
                  >
                     <th>
                        <ResultTableHeader>Data</ResultTableHeader>
                     </th>

                     <th style={{ paddingLeft: "12px" }}>
                        <ResultTableHeader>Último</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Máxima</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Mínima</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Variação %</ResultTableHeader>
                     </th>

                     <th style={{ paddingLeft: "12px" }}>
                        <ResultTableHeader>Último</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Máxima</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Mínima</ResultTableHeader>
                     </th>
                     <th>
                        <ResultTableHeader>Variação %</ResultTableHeader>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {allDates.map((elem, i) => {
                     return (
                        <tr key={i}>
                           <ResultTableData>{elem}</ResultTableData>

                           <ResultTableData style={{ paddingLeft: "12px" }}>{ibovData[i].last}</ResultTableData>
                           <ResultTableData>{ibovData[i].max}</ResultTableData>
                           <ResultTableData>{ibovData[i].min}</ResultTableData>
                           <ResultTableData>
                              {ibovData[i].var > 0 ? (
                                 <PositiveVariationMark> {ibovData[i].var}% </PositiveVariationMark>
                              ) : (
                                 <NegativeVariationMark> {ibovData[i].var}% </NegativeVariationMark>
                              )}
                           </ResultTableData>

                           <ResultTableData style={{ paddingLeft: "12px" }}>{petrData[i].last}</ResultTableData>
                           <ResultTableData>{petrData[i].max}</ResultTableData>
                           <ResultTableData>{petrData[i].min}</ResultTableData>
                           <ResultTableData>
                              {petrData[i].var > 0 ? (
                                 <PositiveVariationMark> {petrData[i].var}% </PositiveVariationMark>
                              ) : (
                                 <NegativeVariationMark> {petrData[i].var}% </NegativeVariationMark>
                              )}
                           </ResultTableData>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </section>
   );
};

export default Historic;