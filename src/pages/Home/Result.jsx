import * as React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const TableHeader = styled.div`
   font-weight: bold;
   font-size: 34px;
   text-align: center;
   line-height: 4.5rem;
   color: #000000;
   background: #f4f4f6;
   border-radius: 12px 12px 0px 0px;
   border-bottom: 6px solid black;
`;

const TableLabel = styled.td`
   font-size: 18px;
   padding-left: 2rem;
   line-height: 2.1rem;
   color: #000000;
`;

const TableData = styled.td`
   font-size: 18px;
   line-height: 2.2rem;
   color: #000000;
`;

const BetaResult = (props) => {
   return (
      <section style={{ marginTop: "4rem"}}>
         <Title style={{ marginBottom: "54px" }}>Resultado do cálculo</Title>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            
               <table style={{ width: "600px" }}>
                  <thead>
                     <tr>
                        <th colSpan={2}>
                           <TableHeader>β = 0,89302</TableHeader>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <TableLabel>Período</TableLabel>
                        <TableData>06/01/2020 a 06/08/2020</TableData>
                     </tr>
                     <tr>
                        <TableLabel># meses</TableLabel>
                        <TableData>7</TableData>
                     </tr>
                     <tr>
                        <TableLabel># dias</TableLabel>
                        <TableData>214</TableData>
                     </tr>
                     <tr>
                        <TableLabel>Volatilidade IBOV</TableLabel>
                        <TableData>21,03%</TableData>
                     </tr>
                     <tr>
                        <TableLabel>Volatilidade PETR4</TableLabel>
                        <TableData>36,03%</TableData>
                     </tr>
                     <tr>
                        <TableLabel>R²</TableLabel>
                        <TableData>0,7103</TableData>
                     </tr>
                  </tbody>
               </table>
         </div>
      </section>
   );
};

export default BetaResult;