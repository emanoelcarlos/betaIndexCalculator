import * as React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import { Bubble } from "react-chartjs-2";

const { Title } = Typography;

function DispersionChart(props) {
  const [benckmarkTicker, setBenchmarkTicker] = useState("");
  const [stockTicker, setStockTicker] = useState("");
  const [quantityOfDays, setQuantityOfDays] = useState(0);
  const [dispersionResult, setDispersionResult] = useState([]);

  useEffect(() => {
    plotChart(props.benchmarkHistory, props.stocksHistory, props.quantityOfDays);
  }, [props]);

  const plotChart = (benchmarkHistory, stocksHistory, quantityOfDays) => {
    let _dispersionResult = [];
    let benchmarkData = Object.values(benchmarkHistory);
    let stockData = Object.values(stocksHistory);

    if (benchmarkData.length && stockData.length) {
      setBenchmarkTicker(Object.keys(benchmarkHistory)[0]);
      setStockTicker(Object.keys(stocksHistory)[0]);
      setQuantityOfDays(quantityOfDays);

      benchmarkData = benchmarkData[0];
      stockData = stockData[0];

      //TODO: deal with different array sizes
      if (benchmarkData.length <= stockData.length) {
        for (let i = 0; i < benchmarkData.length; i++) {
          _dispersionResult.push({ x: benchmarkData[i].var, y: stockData[i].var, r: 4 });
        }
      }
    }

    setDispersionResult(_dispersionResult);
  };

  return (
    <section style={{ marginTop: "4rem" }}>
      <Title>Gráfico de dispersão</Title>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div>
          {
            <Bubble
              data={{
                datasets: [
                  {
                    label: "Dispersão",
                    data: dispersionResult,
                    backgroundColor: "lightblue",
                  },
                ],
              }}
              options={{
                scales: {
                  xAxes: [
                    {
                      scaleLabel: {
                        labelString: benckmarkTicker,
                        display: true,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      scaleLabel: {
                        labelString: stockTicker,
                        display: true,
                      },
                    },
                  ],
                },
              }}
            />
          }
        </div>
        <div>
          No gráfico acima temos o retorno diário de {stockTicker} no eixo Y e de {benckmarkTicker} no Eixo X. O período analisado reflete os últimos {quantityOfDays} dias. 
          A quantidade de dias pode ser ajustada nas configurações avançadas acima.
        </div>
      </div>
    </section>
  );
}

//    var myBubbleChart = new Chart(ctx, {
//       type : 'bubble',
//       data : {
//           datasets : [
//               {
//                   label : 'Group 1: ' + main_arr[0].length,
//                   data : main_arr[0],
//                   backgroundColor : 'lightblue'
//               }, {
//                   label : 'Group 2: ' + main_arr[1].length,
//                   data : main_arr[1],
//                   backgroundColor : 'pink'
//               }
//           ],
//       },
//       options : {
//           scales : {
//               yAxes : [{
//                       ticks : {
//                           beginAtZero : true,
//                           min : 0,
//                           max : 100
//                       }
//                   }
//               ],
//               xAxes : [{
//                       ticks : {
//                           beginAtZero : true,
//                           min : 0,
//                           max : 10
//                       }
//                   }
//               ],
//           }
//       }
//   });
export default DispersionChart;
