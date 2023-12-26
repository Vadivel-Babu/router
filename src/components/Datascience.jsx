import Card from "./Card"

const Datascience = () => {
  const data = [{
    img:"datascience.jpg",
    title:"Data Science"
  },{
    img:"datascience.jpg",
    title:"Data Science"
  },{
    img:"datascience.jpg",
    title:"Data Science"
  }]
  return (
    <div className="container">
      <div className="flex">
        {data.map((el,i) => <Card key={i} data={el}/> )}
      </div>
    </div>
  )
}

export default Datascience