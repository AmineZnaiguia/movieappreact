import React from 'react'
// ★☆
export default function raiting({raiting, handleRate=()=>{}}) {

let star = []
for(let i =0; i<5; i++){

if(i<raiting){
    star.push(<span onClick={()=>handleRate(i+1)} key={i} >★</span>)
}
else{
    star.push(<span onClick={()=>handleRate(i+1)} key={i}>☆</span>)
}



}



    return (
        <div>
            {star}
        </div>
    )
}
