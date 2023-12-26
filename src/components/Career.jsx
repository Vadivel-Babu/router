import Card from "./Card"

const Career = () => {
   const data = [{
    img:"career.png",
    title:"Career"
  },{
    img:"career.png",
    title:"Career"
  },{
    img:"career.png",
    title:"Career"
  }]
  return (
    <div className="container">
      <div className="flex">
        {data.map((el,i) => <Card key={i} data={el}/>)}
      </div>
    </div>
  )
}

export default Career