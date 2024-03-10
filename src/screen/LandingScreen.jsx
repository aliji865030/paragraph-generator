import {data} from "./../components/data"
import { useState } from "react";



function LandingScreen(){

    const [value,setValue]=useState(2);

   
        let updatedData=[]
        for(let i=0;i<value;i++){
            updatedData[i]=data[i];
        }
        
    
        
    


return(
    <div className="flex flex-col items-center text-center" >
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center p-7 " style={{color:"#94360b"}}>TIRED OF BORING LOREM IPSUM?</h1>
        </div>
        <div className="flex gap-3 text-sm md:text-xl">
            <p>Paragraphs:</p>
            <input type="range" min={1} max={8} className="border" value={value} onChange={(e)=>Number(setValue(e.target.value))} />
            
        </div>
        <div className="w-7/12 my-9 text-sm md:text-xl">
            {updatedData.map((item)=>{
                return(
                    <div className="p-5">
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>

    </div>
)
}

export default LandingScreen;