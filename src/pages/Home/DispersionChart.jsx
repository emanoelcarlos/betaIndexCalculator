import * as React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";

const { Title } = Typography;

const DispersionChart = () => {
   return (
      <section style={{ marginTop: "4rem"}}>
         <Title>Gráfico de dispersão</Title>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div>Gráfico ...</div>
            <div>
               No gráfico acima temos o retorno diário da PETR4 no eixo Y e do IBOV no Eixo X. O período analisado
               reflete os últimos 3 anos. Clique aqui para mudar configurações avançadas.
            </div>
         </div>
      </section>
   );
};

export default DispersionChart;