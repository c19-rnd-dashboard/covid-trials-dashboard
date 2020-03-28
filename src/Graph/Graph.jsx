import React from 'react'
import {
  VictoryTheme,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryBar,
} from 'victory'

const sadBlue = '#403FFF'
const magenta = '#FF3FFF'
const yellow = '#FEFF3F'
const tourquese = '#00FEFF'
const green = '#00FF00'



const mockData = () => [
  [// discovery
    { x: 'Vax 1', y: Math.random() }, // "y" would be days that the milestone last (y = endDate - startDate)
    { x: 'Vax 2', y: Math.random() },
    { x: 'Vax 3', y: Math.random() },
  ], [// clinical batch
    { x: 'Vax 1', y: Math.random() },
    { x: 'Vax 2', y: Math.random() },
    { x: 'Vax 3', y: Math.random() },
  ], [// phase 1
    { x: 'Vax 1', y: Math.random() },
    { x: 'Vax 2', y: Math.random() },
    { x: 'Vax 3', y: Math.random() },
  ], [// phase 2
    { x: 'Vax 1', y: Math.random() },
    { x: 'Vax 2', y: Math.random() },
    { x: 'Vax 3', y: Math.random() },
  ]
]


const vaccinesData = [
  mockData(), // best case
  mockData(), // worst case
  mockData(), // actual case
]

const Graph = () => {
  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 50 }}
        width={500}
        height={500}
        theme={VictoryTheme.material}
      >
        <VictoryGroup
          horizontal
          offset={20}
          style={{ data: { width: 15 } }}
          colorScale={[sadBlue, magenta, yellow, tourquese, green]} >
          {/* Need to bing the label data to the VictoryLabel for each bar */}
          {vaccinesData.map((mockData, i) =>
            <VictoryStack key={i} >
              {mockData.map((data, index) => {
                return <VictoryBar
                  key={index}
                  data={data} />
              })}
            </VictoryStack>
          )}
        </VictoryGroup>
      </VictoryChart>
    </div >
  )
}
export default Graph
