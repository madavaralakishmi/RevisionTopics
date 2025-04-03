
const ContainerList = (props)=>{
    const {resData} = props
    const {name,cloudinaryImageId,locality,areaName,avgRating,costForTwo,cuisines} =resData.info
    return(
      <div>
      <div className="container">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} width="300px" height="200px"/>
        <h3>{name}</h3>
        <p><span className="span">{avgRating}</span>{locality},{areaName}</p>
        <p>{cuisines}</p>
        <p>{costForTwo}</p>
      </div>
      </div>     
    )
  }

export default ContainerList
