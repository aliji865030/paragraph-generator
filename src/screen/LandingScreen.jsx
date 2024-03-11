import {data} from "./../components/data"
import { useState } from "react";



function LandingScreen(){

    const [value,setValue]=useState(0);
    const [tempPara,setTempPara]=useState(["Paragraph coming soon......"])

   
        
    
    function generaPassword(){
          if(value>0&&value<=8){
            let updatedData=[]
            for(let i=0;i<value;i++){
                updatedData[i]=data[i];
                
            }
            setTempPara([...updatedData])
          }

          if(value===0) alert("you cannot set number of paras equals 0 !!!! 😈")
          else if(value>8 || value<0) alert("you are going out of range... 😂")
         

        }
    
        
    


return(
    <div className="flex flex-col items-center text-center" >
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-7 " style={{color:"#94360b"}}>TIRED OF BORING LOREM IPSUM?</h1>
        </div>
        <div className="flex gap-3 text-sm md:text-xl">
            <p>Paragraphs:</p>
            <input type="number"  className="border px-2 w-20 " value={value} onChange={(e)=>Number(setValue(e.target.value))} />
            <button onClick={generaPassword} className="py-1 px-4 bg-green-500 hover:bg-green-600 rounded-lg text-white">Generate</button>
            
        </div>
        <div className="w-10/12 md:w-8/12 my-9 text-sm md:text-xl">
            {tempPara.map((item)=>{
                return(
                    <div className="px-0 py-5 md:p-5">
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>

    </div>
)
}

export default LandingScreen;