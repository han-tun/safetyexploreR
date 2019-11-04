HTMLWidgets.widget({

  name: 'aeTimelines',

  type: 'output',

  factory: function(el, width, height) {

   return {

      renderValue: function(x) {

      el.innerHTML = "";
        
        
      x.data = HTMLWidgets.dataframeToD3(x.data);
      
      console.log(x.settings);
      
       
       var chart = aeTimelines(el, x.settings);
       
       chart.init(x.data);
       
       el.chart = chart;

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});