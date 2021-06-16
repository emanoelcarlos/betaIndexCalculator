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

         <Row style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
            <Col xs={1} md={4}></Col>
            <Col xs={22} md={16}>
               <StyledTitle>Calculadora Beta</StyledTitle>
               <BannerParagraph>
                  O Índice Beta (β) mede a volatilidade de um papel em relação a um indicador de mercado, como o IBOV ou
                  qualquer outro índice. Ele é uma medida importante para medir o risco de um investimento.
               </BannerParagraph>

               <BannerParagraph>
                  O próprio mercado é considerado como sendo Beta de valor 1. O beta de uma ação
                  é calculado usando análise de regressão. Se o beta da ação for maior que 1, isso significa que os preços das ações são mais
                  voláteis do que o mercado, e vice-versa. Por exemplo, se uma ação tem um beta de 1.2, isso significa
                  que uma mudança de 1% no índice de mercado trará uma mudança de 1,2% no preço da ação. Ações com beta
                  alto são consideradas mais arriscadas em comparação com aquelas com beta baixo.
               </BannerParagraph>
               
               <BannerParagraph>Crie sua conta e acompanhe o beta de sua carteira gratuitamente.</BannerParagraph>
            </Col>
            <Col xs={1} md={4}></Col>
         </Row>
      </BannerContainer>
   </>
);

export default Banner;
