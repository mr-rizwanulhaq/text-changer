import React from 'react'

export default function Alert(prop) {

    const capatilize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1)

    }

  return (
    
      <div style={{height: "50px"}}>
                {prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatilize(prop.alert.type)}: </strong>{prop.alert.message}
        </div>}
      </div>

      
    
  )
}
