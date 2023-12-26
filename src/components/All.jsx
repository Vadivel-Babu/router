import Card from "./Card"


const All = () => {
  const data = [{
    img:"fsd.png",
    title:"Full Stack Development"
  },{
    img:"datascience.jpg",
    title:"Data Science"
  },{
    img:"cyber.png",
    title:"Cyber Security"
  },{
    img:"career.png",
    title:"Career Development"
  }]
  return (
    <div className="container">
      <div className="flex">
        {data.map((el,i) => <Card key={i} data={el}/> )}
      </div>
    </div>
  )
}

export default All