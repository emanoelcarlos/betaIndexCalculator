import * as React from "react";
import "antd/dist/antd.css";
import { Row, Col, Typography } from "antd";
import Banner from "./Banner";
import DispersionChart from "./DispersionChart";
import BetaResult from "./Result";
import Historic from "./Historic";
import Selection from "./Selection";
import Footer from "./Footer";

const { Title } = Typography;

const Home = () => (
   <div>
      <Banner />

      <Selection />

      <Row>
         <Col xs={0} md={4}></Col>

         <Col xs={24} md={16}>
            <DispersionChart />
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

export default Home;
