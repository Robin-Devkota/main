import React from 'react'
import  './Physics.css'
import Image from "react-bootstrap/Image";
function Physics({questions}) {

  return (

    <div className='main'>
      {questions.map((question)=>{
        const {id,ques,ans,img}=question;
        return(
     
            <div className='parent'>
               <div className="child">
              <h4>{ques}</h4>
               <p>{ans}</p>
               
                  <Image className="img"src={img} alt=""  />
                  </div>
                 </div>
                )
            })}

    </div>
  )
}

export default Physics