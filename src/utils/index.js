import * as echarts from "echarts";
export function initEchartsTree() {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("echart-root"));

  // 配置项
  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        orient: "vertical",
        data: [],

        top: "10%",
        left: "7%",
        bottom: "2%",
        right: "0%",
        symbol: "circle",
        height: "80%",
        symbolSize: 60,

        label: {
          position: "left",
          verticalAlign: "middle",
          align: "right",
          fontSize: 9,
        },

        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },

        emphasis: {
          focus: "descendant",
        },
        nodePadding: 20, // 20
        animationDurationUpdate: 550, // 动画过渡时间  毫秒
        expandAndCollapse: false, //子树折叠和展开的交互，默认打开
        initialTreeDepth: 2, // 设置树状图的初始展示层数
        roam: "move",
        label: {
          // show: false, // 控制展示

          //标签样式
          // color: '#000',
          color: "#fff",

          fontSize: 12,

          position: "inside", // outside
          rotate: 0, // 倾斜

          // 默认展示 不写也是params.name
          formatter: (params) => {
            //   不可用div
            return params.name;
          },
        },
        // 线样式
        lineStyle: {
          width: 1,
          curveness: 0,
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  return (initData) => {
    // 配置项
    option.series[0].data = [initData]
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption({...option},true);
    console.log(myChart,{...option})
  };
}
