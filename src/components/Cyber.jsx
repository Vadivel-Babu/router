import Card from "./Card"

const Cyber = () => {
  const data = [{
    img:"cyber.png",
    title:"Cyber Security"
  },{
    img:"cyber.png",
    title:"Cyber Security"
  },{
    img:"cyber.png",
    title:"Cyber Security"
  }]
  return (
    <div className="container">
      <div className="flex">
        {data.map((el,i) => <Card key={i} data={el}/> )}
      </div>
    </div>
  )
}

export default Cyber