import React from 'react';
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  FlexibleXYPlot
} from "react-vis";

import {AutoSizer, List} from 'react-virtualized';
import 'react-virtualized/styles.css';


const Chart = () => {
  const data1 = [
    { x: 1, y: 0 },
    { x: 2, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 7 },
    { x: 7, y: 9 },
    { x: 8, y: 12 },
    { x: 9, y: 12 },
    { x: 10, y: 13 },
    { x: 11, y: 14 },
    { x: 12, y: 17 },
    { x: 13, y: 18 },
    { x: 14, y: 19 },
    { x: 15, y: 19 },
    { x: 16, y: 21 },
    { x: 17, y: 22 },
    { x: 18, y: 23 },
    { x: 19, y: 25 }
  ];

  const data2 = [
    { x: 1, y: 0 },
    { x: 2, y: 1 },
    { x: 3, y: 2 },
    { x: 4, y: 3 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 6 },
    { x: 8, y: 8 },
    { x: 9, y: 5 },
    { x: 10, y: 6 },
    { x: 11, y: 7 },
    { x: 12, y: 5 },
    { x: 13, y: 6 },
    { x: 14, y: 2 },
    { x: 15, y: 8 },
    { x: 16, y: 9 },
    { x: 17, y: 15 },
    { x: 18, y: 14 },
    { x: 19, y: 12 }
  ];
  return (
    <main>
    <div style={{height: "500px", width:"1350px"}}>
    <div style={{ height:'100%',width:'100%' }}>

  <AutoSizer>
      {({ height, width }) => (
        <FlexibleXYPlot height={height} width={width} xType="ordinal" yDomain={[0, 54]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Weeks" />
            <YAxis title="Users" />
            <LineMarkSeries data={data1} color="blue" />
            <LineMarkSeries data={data2} color="yellow" />
        </FlexibleXYPlot>
        )}
    </AutoSizer>

    <div className="graphInfo">
              <div className="colorBox1"></div>
              <p>Total Number of Users in the system</p>
              <div className="colorBox2"></div>
              <p>Number of Active Users in the system</p>
            </div>
    </div>
    </div>
    </main>
  );
};

export default Chart;
