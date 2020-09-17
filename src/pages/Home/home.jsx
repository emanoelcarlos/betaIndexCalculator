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

const { Title } = Typography;

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
      Object.keys(stockData["Time Series (Daily)"]).forEach((elem, index) => {
         result.push({
            timestamp: elem,
            close: stockData["Time Series (Daily)"][elem]["4. close"],
            high: stockData["Time Series (Daily)"][elem]["2. high"],
            low: stockData["Time Series (Daily)"][elem]["3. low"],
         });
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
               <Historic />

               <Title level={2} style={{ marginTop: "4rem", textAlign: "center", padding: "0px 100px" }}>
                  Crie sua conta gratuita e acompanhe o beta de sua carteira diariamente
               </Title>
            </Col>

            <Col xs={0} md={4}></Col>
         </Row>

         <Footer />
      </div>
   );
}

export default Home;
