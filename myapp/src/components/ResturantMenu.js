import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ResturantSectionCard = (props)=>{
    const {name,description,imageId} = props.items.card.info
    //console.log(props)
    return(
        <div className="rest_Section">
            <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} width="200px" height="200px"/>
            <h2>{name}</h2>
            </div>
            <div>
                <h2>{description}</h2>
            </div>
        </div>
    )
    

}




const ResturantMenu =()=>{
    const [restMenu , setRestMenu] = useState([])
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
     getResturantMenu()
    },[])

 


    const getResturantMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId="+id)
        const json = await data.json()
        setRestMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8])
    }
    //console.log(restMenu)
    //console.log(restMenu.card?.card?.categories[0]?.itemCards)
 
    

    return(
        <div>
          {restMenu.card?.card?.categories[0]?.itemCards.map((item)=>{
            return <ResturantSectionCard key={item.card.info.id} items={item}/>
          })}
        </div>
    )

}

export default ResturantMenu;