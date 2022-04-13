var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {
                data: [
                    {x: 68.3, y: 5878},
                    ],
                    label: "Indonesia",
                    borderColor: "#5c6e31",
                    backgroundColor:"rgb(92,110,49,0.1)",
                    borderWidth:2,
              },

              {
                data: [
                    {x: 71.9, y: 11461 },
                    ],
                    label: "Brazil",
                    borderColor: "#72dae2",
                    backgroundColor:"rgb(114,218,226,0.1)",
                    borderWidth:2,
              },

              {
                data: [
                    {x: 65.4, y: 13173},
                    ],
                    label: "Russia",
                    borderColor: "#b3b520",
                    backgroundColor:"rgb(179,181,32,0.1)",
                    borderWidth:2,
              },

              {
                data: [
                    {x: 62.6, y: 3366},
                    ],
                    label: "Pakistan",
                    borderColor: "#d42e09",
                    backgroundColor:"rgb(212,46,9,0.1)",
                    borderWidth:2,
              },

              {
                data: [
                    {x: 65.8, y: 1632},
                    ],
                    label: "Bangladesh",
                    borderColor: "#731904",
                    backgroundColor:"rgb(115,25,4,0.1)",
                    borderWidth:2,
              },

              {
                data: [
                    {x: 81.1, y: 32193},
                    ],
                    label: "Japan",
                    borderColor: "#ff5858",
                    backgroundColor:"rgb(255,88,88,0.1)",
                    borderWidth:2,
              }


            ]
          },
          options: {
              responsive: true,
                plugins: {
                    title: {
                        display:true, 
                        text: 'The Top 10 Countries in Life Expectancy and GDP',
                        font: {
                            size: 18
                        }
                    },
                },
                
                subtitle: {
                    display: true, 
                    text: 'The following countries are the top ten in the world for life expectancy and GDP per capita.',
                },

            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },

              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });

