//左上柱状图
(function(){
    //初始化实例对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //指定配置项和数据（option） 
    var option = {
        color: "#2f89cf",
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: "10px",
          left: '0%',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交培训", "金融行业"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel:{
                color:"rgba(255,255,255,0.6)",
            },
            axisLine:{
                show : false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel:{
                color:"rgba(255,255,255,0.6)",
                fontSize : "12"
            },
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)",
                    width:"2"
                } 
            },
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle:{
                barBorderRadius:5
            }
          }
        ]
      };
      //将配置项设置给echarts实例对象
      myChart.setOption(option);
      //图表跟屏幕自适应
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})();

//右上柱状图
(function(){
    var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
          top:'10%',
          left: '22%',
          bottom: '10%',
          containLabel: false
        },
        xAxis: {
          show:false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,//是否反向坐标轴
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                //不显示y轴的线
                axisLine:{
                  show:false
                },
                //不显示y轴刻度
                axisTick:{
                  show:false
                },
                //文字颜色
                axisLabel:{
                  color:"#fff"
                }
              },
              {
                type: 'category',
                inverse: true,
                data: [702, 350, 610, 793, 664],
                //不显示y轴的线
                axisLine:{
                  show:false
                },
                //不显示y轴刻度
                axisTick:{
                  show:false
                },
                //文字颜色
                axisLabel:{
                  color:"#fff"
                }
              },
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            barCategoryGap:50,//柱子之间的距离
            barWidth:10,//柱子的宽度
            itemStyle:{
                barBorderRadius:20,
                color:function(params){
                    return myColor[params.dataIndex]
                }
            },
            label:{
                show: true,
                position:"inside",
                fontSize:10,
                formatter:"{c}%"
            }
          },
          {
            name: '框',
            type: 'bar',
            barCategoryGap:50,//柱子之间的距离
            barWidth:10,//柱子的宽度
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle:{
                barBorderRadius: 20,
                color: "none",
                borderColor:"#00c1de",
                borderWidth:1.5        
            }
          }
        ]
      };
      myChart.setOption(option);
      //图表跟屏幕自适应
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})();

//左中折线图
(function(){
    var yearData = [
        {
            year: '2023',
            data: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2024',
            data: [
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新增粉丝', '新增游客'],
          textStyle: {
            color: "#4c9bfd"
          },
          right: 0
        },
        grid: {
          left: '0%',
          top: '20%',
          right: '4%',
          bottom: '3%',
          show:true,
          borderColor:"#012f4a",
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月','5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
          axisLabel: {//刻度标签
            color: "#4c9bfd"
          },
          axisTick: {//坐标轴刻度
            show: false
          },
          axisLine: {//刻度线
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {//刻度标签
            color: "#4c9bfd"
          },
          axisTick: {//坐标轴刻度
            show: false
          },
          axisLine: {//刻度线
            show: false
          },
          splitLine: {//分割线
            lineStyle: {
                color: '012f4a'
            } 
          }
        },
        series: [
          {
            name: '新增粉丝',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: yearData[0].data[0]
          },
          {
            name: '新增游客',
            type: 'line',
            stack: 'Total',
            smooth: true,//true会使折线带弧度
            data: yearData[1].data[1]
          }
        ]
      };
      myChart.setOption(option);

      //图表跟屏幕自适应
      window.addEventListener('resize',function(){
        myChart.resize();
      });

      //点击切换效果
      $('.line h2').on('click', 'a', function(){
        //点击a后，根据当前a的索引号找到对应的yearData的相关对象
        //console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option);
    });
})();

//右中折线图
(function(){
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: "0%",
          textStyle:{
            color: "rgba(255,255,255,.5)",
            fontSize: 12
          }
        },
        grid: {
          left: '5%',
          top: "15%",
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            axisLabel: {//刻度标签
                textStyle:{
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
              }
            },
            axisLine: {//刻度线
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            }
          }
        ],
        yAxis: {
          type: 'value',
          axisLabel: {//刻度标签
            textStyle:{
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            }
          },
          axisTick: {//坐标轴刻度
            show: false
          },
          axisLine: {//刻度线
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
          },
          splitLine: {//分割线
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            } 
          }
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: "#0184d5",
              width: "2"
            },
            areaStyle: {
              //阴影渐变
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.8)"//渐变起始色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.2)"//渐变结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            //设置拐点
            symbol: "circle",
            symbolSize: 5,//拐点大小
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
            },
            showSymbol: false,//开始不显示拐点，鼠标经过显示
            emphasis: {
              focus: 'series'
            },
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 55, 30, 40, 30, 40, 30, 40, 30, 60, 70, 20, 40, 30, 40, 30, 40, 20, 60, 50, 40]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              color: "#00d887",
              width: "2"
            },
            areaStyle: {
              //阴影渐变
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.8)"//渐变起始色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.2)"//渐变结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            //设置拐点
            symbol: "circle",
            symbolSize: 5,//拐点大小
            itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
            },
            showSymbol: false,//开始不显示拐点，鼠标经过显示
            emphasis: {
              focus: 'series'
            },
            data: [95, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 100, 30, 40, 90, 20, 20, 40, 80, 70, 30, 40, 30, 80, 20, 99, 50, 20]
          }
        ]
      };
      myChart.setOption(option);

      //图表跟屏幕自适应
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//左下饼图
(function(){
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      left: 'center',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255, 255, 255, .5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ["50%", "45%"],//饼图在矩形框的位置
        radius: ['40%', '70%'],//内圆和外圆的半径
        //饼图的color可以在option或series直接定义
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        avoidLabelOverlap: false,//是否启用防止标签重叠
        label: {
          show: false,//不显示文字标签
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        labelLine: {//不显示连接线
          show: false
        },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  };
  myChart.setOption(option);

  //图表跟屏幕自适应
  window.addEventListener('resize',function(){
    myChart.resize();
  });
})();

//右下饼图
(function(){
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      show: false
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ["10%", "70%"],
        center: ['50%', '45%'],
        roseType: 'radius',//面积模式：area；半径模式：radius
        itemStyle: {
          borderRadius: 5
        },
        label: {
          fontSize: 12
        },
        labelLine: {
          length: 6,//链接图形的线
          length2: 8//链接文字的线
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);

   //图表跟屏幕自适应
   window.addEventListener('resize',function(){
    myChart.resize();
  });
})();
