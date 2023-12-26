

const Card = ({data}) => {
  console.log(data.img);
  return (
    <div className="card">
      <img className="img" src={data.img} alt={data.title}/>
      <h1 className="title">{data.title}</h1>
      <button className="btn">Learn More</button>
    </div>
  )
}

export default Card