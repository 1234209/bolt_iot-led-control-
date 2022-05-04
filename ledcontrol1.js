singleButton({name:"Led On", action:"digitalWrite", 
              pin:"0", value:"HIGH",bgcolor:"green",
              shape:"rectangle",align:"left","text_color":"white" })

singleButton({name:"Led Off", action:"digitalWrite", 
              pin:"0", value:"LOW", bgcolor:"red",
              shape:"rectangle", align:"left", text_color:"black"})

singleButton({name:"Fan On", action:"analogWrite", 
              pin:"0", value:"230",bgcolor:"#ffa500",
              shape:"circle", align:"right","text_color":"white" })

singleButton({name:"Fan Off", action:"analogWrite", 
              pin:"0", value:"0",bgcolor:"#6a5acd",
              shape:"circle", align:"right", text_color:"white"})
