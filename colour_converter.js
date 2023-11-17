function convert_color(color){
    let hex_values = [];
    let RGB_values = [];
    
    if(color.startsWith("#")){
      color = color.replace('#', '');
      for(let i = 0; i < 6; i += 2) {
          let hex_string = color.substring(i, i+2);
          let RGB_string = parseInt(hex_string, 16);
          RGB_values.push(RGB_string);
      }
      console.log(`HEX: #${color} and RGB: (${RGB_values})`)
    //   return(`HEX: #${color} and RGB: (${RGB_values})`)
    }
    else if (color.startsWith("rgb(") && color.endsWith(")")) {
        var color = color.replace("rgb(", "").replace(")", "").split(',')
        for(j=0;j < color.length; j++){
         let hex_string = (parseInt(color[j], 10).toString(16)).padStart(2, '0');
         hex_values.push(hex_string)
        }
        console.log(`RGB: (${color}) and HEX: #${hex_values.join('')}`)
        // return(`RGB: (${color}) and HEX: #${hex_values.join('')}`) 
    }
    else{
        console.log('enter correct color format. either RGB or hexadecimal format.')
    }
        
  }
    
  
  const hex_color_input = "#FF5733";
  const rgb_color_input = "rgb(255, 0, 0)";
  anoda_color_input = "ff0000";
  
  
  convert_color(hex_color_input);
  convert_color(rgb_color_input);
  convert_color(anoda_color_input)