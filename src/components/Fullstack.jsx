import Card from "./Card"


const Fullstack = () => {
  const data = [{
    img:"fsd.png",
    title:"Full Stack Development"
  },{
    img:"fsd.png",
    title:"Full Stack Development"
  },{
    img:"fsd.png",
    title:"Full Stack Development"
  }]
  return (
    <div className="container">
      <div className="flex">
        {data.map((el,i) => <Card key={i} data={el}/>)}
      </div>
    </div>
  )
}

export default Fullstack