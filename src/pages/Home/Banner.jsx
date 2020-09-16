import * as React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Row, Col, Typography } from "antd"; 
import { Button } from "antd";

const { Text, Title, Paragraph } = Typography;

const BannerContainer = styled.div`
   background-color: #15151a;
   width: 100%;
   color: #fff;
`;

const StyledTitle = styled(Title)`
   &.ant-typography {
      font-size: 42px;
      color: #fff;
   }
`;

const BannerParagraph = styled(Paragraph)`
   &.ant-typography {
      color: #fff;
      font-size: 22px;
   }
`;

const MenuItem = styled(Text)`
   &.ant-typography {
      color: #fff;
      font-size: 1.2rem;
      margin: 1.3rem;
   }
`;

const MenuButton = styled(Button)`
   margin: 1rem;
`;

const Banner = () => (
   <>
      {/* Banner */}
      <BannerContainer>
         {/* Menu */}
         <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={24} md={20}>
               <section style={{ display: "flex", justifyContent: "space-between" }}>
                  {/* Logo */}
                  <MenuItem>Logo</MenuItem>

                  {/* Itens de menu */}
                  <section style={{ display: "flex", justifyContent: "space-between" }}>
                     <MenuItem>Saiba mais sobre o beta</MenuItem>
                     <MenuItem>Ferramentas</MenuItem>
                     <MenuButton type="primary" size="large">
                        Crie sua conta
                     </MenuButton>
                  </section>
               </section>
            </Col>
            <Col xs={0} md={2}></Col>
         </Row>

         <Row style={{paddingTop: "2rem", paddingBottom: "4rem"}}>
            <Col xs={1} md={4}></Col>
            <Col xs={22} md={16}>
               <StyledTitle>Calculadora Beta</StyledTitle>
               <BannerParagraph>
                  Beta (β) measures the volatility of a stock in relation to a market such as S&P 500 or any other
                  index. It is an important measure to gauge the risk of a security.
               </BannerParagraph>

               <BannerParagraph>
                  The market itself is considered to have a Beta of 1. Using regression analysis, the beta of the stock
                  is calculated. If the beta of the stock is greater than 1, this means the stock’s prices are more
                  volatile than the market, and vice verse. For example, if a stock has a beta of 1.2, this means that a
                  1% change in the market index will bring about a 1.2% change in the stock’s price. Stocks with high
                  beta are considered to be more risky compared to the ones with low beta.
               </BannerParagraph>
               <BannerParagraph>Crie sua conta e acompanhe o beta de sua carteira gratuitamente.</BannerParagraph>
            </Col>
            <Col xs={1} md={4}></Col>
         </Row>
      </BannerContainer>
   </>
);

export default Banner;