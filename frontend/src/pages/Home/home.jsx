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
import _ from "lodash";
import moment from "moment";
const finance = require("./financial");

const { Title, Text, Paragraph } = Typography;

function Home() {
  const [lastNDays, setLastNDays] = useState(200);
  const [benchmarkHistory, setBenchmarkHistory] = useState({});
  const [stocksHistory, setStocksHistory] = useState({});

  const calculateBeta = async (benchmark, stocks) => {
    console.log(benchmark, stocks);
    await fetchBenchmarkPricesAndReturnsHistory(benchmark);
    await fetchStockPricesAndReturnsHistory(stocks);
  };

  const fetchBenchmarkPricesAndReturnsHistory = async (benchmark) => {
    setBenchmarkHistory({});

    const dateFrom = moment().subtract(lastNDays, "days").format("YYYY-MM-DD");
    const dateTo = moment().format("YYYY-MM-DD");

    let newHistoric = {};
    newHistoric[benchmark] = await getTickerHistoric(benchmark, dateFrom, dateTo);
    setBenchmarkHistory(newHistoric);
  };

  const fetchStockPricesAndReturnsHistory = async (stocks) => {
    setStocksHistory({});
    let updatedStocksHistory = {};

    stocks.forEach(async (ticker) => {
      const dateFrom = moment().subtract(lastNDays, "days").format("YYYY-MM-DD");
      const dateTo = moment().format("YYYY-MM-DD");

      updatedStocksHistory[ticker] = await getTickerHistoric(ticker, dateFrom, dateTo);

      setStocksHistory(updatedStocksHistory);
    });
  };

  const getTickerHistoric = async (ticker, dateFrom, dateTo) => {
    let historic = await axios.get(`http://localhost:3100/api/stocks?ticker=${ticker}.SA&from=${dateFrom}&to=${dateTo}&period=d`);
    historic = historic.data.map((data) => _.pick(data, ["date", "close"]));
    historic = _.reverse(historic);
    historic = historic.filter((stockDay) => !!stockDay.close);
    historic = calculateDailyVariation(historic);
    return historic;
  };

  const calculateDailyVariation = (historic) => {
    return historic.map((stockDay, index) => {
      return _.set(stockDay, "var", index > 0 ? stockDay.close / historic[index - 1].close - 1 : 0);
    });
  };

  return (
    <div>
      <Banner />

      <Selection calculateBeta={calculateBeta} />

      <Row>
        <Col xs={0} md={4}></Col>
        <Col xs={24} md={16}>
          {Object.keys(stocksHistory).length ==1 && <DispersionChart benchmarkHistory={benchmarkHistory} stocksHistory={stocksHistory} quantityOfDays={lastNDays}/>}
          {/* <BetaResult datasetStockA={stockA} datasetStockB={stockB} /> */}
          {/* <Historic datasetStockA={stockA} datasetStockB={stockB} /> */}

          <Title level={2} style={{ marginTop: "4rem", textAlign: "center", padding: "0px 100px" }}>
            Crie sua conta gratuita e acompanhe o beta de sua carteira diariamente
          </Title>
        </Col>
        <Col xs={0} md={4}></Col>
      </Row>

      <Row>
        <Col xs={0} md={4}></Col>
        <Col xs={24} md={16}>
          <Paragraph style={{ marginTop: "3rem", textAlign: "justify", lineHeight: "1rem" }}>
            Disclaimer: As informações aqui disponibilizadas possuem caráter educacional, genérico e não constituem aconselhamento ou recomendação de investimentos, solicitação de
            compra ou venda de valores mobiliários, produtos, serviços ou quaisquer ativos financeiros. As Informações não se destinam e não foram objeto de avaliação sobre sua
            adequação ao perfil de investidores individuais ou grupo de investidores específicos. A incorporação das Informações a eventual decisão de investimento deverá ser
            efetuada após a análise independente pelo investidor, com base em todas as informações relevantes publicamente disponíveis. As Informações foram obtidas de fontes
            publicamente disponíveis e não foram objeto de investigação, sobre sua veracidade, consistência, completude, suficiência ou atualidade. Este site não poderá ser
            responsabilizado por quaisquer perdas e danos ou lucros cessantes porventura resultantes de sua utilização.
          </Paragraph>
        </Col>

        <Col xs={0} md={4}></Col>
      </Row>

      <Footer />
    </div>
  );
}

export default Home;
