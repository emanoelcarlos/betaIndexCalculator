import * as React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Col, Typography } from "antd";
import Banner from "./Banner";
import DispersionChart from "./DispersionChart";
import BetaResult from "./Result";
import Historic from "./Historic";
import Selection from "./Selection";
import Footer from "./Footer";
import axios from "axios";
import mathjs from "mathjs";

const { Title, Text, Paragraph } = Typography;

function Home() {
   const [stockA, setstockA] = useState([]);
   const [stockB, setstockB] = useState([]);

   const calculateBeta = async (stocks) => {
      console.log(stocks);

      let startDate = 1567382400;
      let endDate = 1600128000;

      //TODO Buscar free stock api

      let resultStockA = await axios.get(
         `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=CAML3.SA&apikey=YQ46CO1SKO2UIL8R`
      );

      let resultStockB = await axios.get(
         `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=PETR4.SA&apikey=YQ46CO1SKO2UIL8R`
      );

      resultStockA = resultStockA.data;
      resultStockB = resultStockB.data;

      console.log(resultStockA);

      setstockA(retrieveStockHistory(resultStockA));
      setstockB(retrieveStockHistory(resultStockB));

      console.log(stockA);
      console.log(stockB);
   };

   const retrieveStockHistory = (stockData) => {
      let result = [];
      let data = stockData["Time Series (Daily)"];

      Object.keys(data).forEach((elem, index) => {
         result.push({
            date: elem,
            close: data[elem]["4. close"],
            high: data[elem]["2. high"],
            low: data[elem]["3. low"],
         });
      });

      console.log(result);

      result.map((elem, index) => {
         return (elem.var = index > 0 ? (elem.close / result[index - 1].close - 1) * 100 : 0);
      });
      return result;
   };

   return (
      <div>
         <Banner />

         <Selection calculateBeta={calculateBeta} />

         <Row>
            <Col xs={0} md={4}></Col>

            <Col xs={24} md={16}>
               <DispersionChart datasetStockA={stockA} datasetStockB={stockB} />
               <BetaResult />
               <Historic datasetStockA={stockA} datasetStockB={stockB} />

               <Title level={2} style={{ marginTop: "4rem", textAlign: "center", padding: "0px 100px" }}>
                  Crie sua conta gratuita e acompanhe o beta de sua carteira diariamente
               </Title>

               <Paragraph style={{ marginTop: "4rem", textAlign: "center", padding: "0px 100px" }}>
                  Disclaimer
               </Paragraph>

               <Paragraph style={{ textAlign: "center", padding: "0px 100px" }}>
                  As informações aqui disponibilizadas possuem caráter genérico e não constituem aconselhamento ou recomendação de
                  investimentos, solicitação de compra ou venda de valores mobiliários, produtos ou quaisquer ativos
                  financeiros. As Informações não se destinam e não foram objeto de avaliação sobre sua adequação ao
                  perfil de investidores individuais ou grupo de investidores específicos. A incorporação das
                  Informações a eventual decisão de investimento deverá ser efetuada após a análise independente pelo
                  investidor, com base em todas as informações relevantes publicamente disponíveis. As Informações foram
                  obtidas de fontes publicamente disponíveis e não foram objeto de investigação, sobre sua veracidade,
                  consistência, completude, suficiência ou atualidade. O blog não poderá ser responsabilizada por
                  quaisquer perdas e danos ou lucros cessantes porventura resultantes de sua utilização.
               </Paragraph>
            </Col>

            <Col xs={0} md={4}></Col>
         </Row>

         <Footer />
      </div>
   );
}

export default Home;
