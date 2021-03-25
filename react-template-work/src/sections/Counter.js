import React from 'react'
import CounterCard from "../components/Counter"

const data = [
  {
    icon:"happiness",
    counter:200,
    title:"Happy Client"
  },
  {
    icon:"coffee-cup",
    counter:750,
    title:"Cups Of Coffee"
  },
  {
    icon:"like", 
    counter:1800,
    title:"Projects Done"
  },
  {
    icon:"building",
    counter:15,
    title:"Office Location"
  },

]
function Counter() {
    return (
        <section id="counter" className="index-3 gray_bg">
    <div className="container">
      <div className="col-lg-12">
        <div className="row row-safari">
          {data.map((data)=>{
            const {icon,counter,title} = data
            return(
              <CounterCard key={counter} icon={icon} counter={counter} title={title}/>
            )
          })}
        </div>
      </div>
    </div>
  </section>
    )
}

export default Counter
