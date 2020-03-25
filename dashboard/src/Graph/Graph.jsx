import React from 'react'
import { VictoryTheme, VictoryChart, VictoryGroup, VictoryStack, VictoryBar } from 'victory'

const Graph = () => {
  const getBarData = () => {
    return [1, 2, 3, 4, 5].map(() => {
      return [
        { x: 'Vax 1', y: Math.random() },
        { x: 'Vax 2', y: Math.random() },
        { x: 'Vax 3', y: Math.random() }
      ];
    })
  }
  return (
    <div>
      <VictoryChart domainPadding={{ x: 50 }} width={400} height={400} theme={VictoryTheme.material}>
        <VictoryGroup horizontal offset={20} style={{ data: { width: 15 } }}>
          <VictoryStack colorScale={'red'}>
            {getBarData().map((data, index) => {
              return <VictoryBar key={index} data={data} />;
            })}
          </VictoryStack>
          <VictoryStack colorScale={'green'}>
            {getBarData().map((data, index) => {
              return <VictoryBar key={index} data={data} />;
            })}
          </VictoryStack>
          <VictoryStack colorScale={'blue'}>
            {getBarData().map((data, index) => {
              return <VictoryBar key={index} data={data} />;
            })}
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Graph