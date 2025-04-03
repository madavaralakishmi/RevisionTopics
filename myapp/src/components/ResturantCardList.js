import { useState,useEffect } from "react"
import ContainerList from "./ContainerList"
import { Link } from "react-router-dom"


const ResturantCardList =()=>{
    const [foodList , setFoodList] = useState([])
    const [copyFoodList, setCopyFoodList] = useState([])
    const [onSearch , setOnSearch] = useState("")

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()

      //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setFoodList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setCopyFoodList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)


    }


    return(
    <div className="App">
      <input type="text" className='' value={onSearch} onChange={(e)=>
      setOnSearch(e.target.value)}/>
      <button onClick={()=>{
        console.log(onSearch , foodList);
        const filtered1 = copyFoodList.filter((items)=>{
          return items.info.name.toLowerCase().includes(onSearch.toLowerCase())
      })
        console.log(filtered1)
        setFoodList(filtered1)

      }}>Search</button>

      
      <button onClick={()=>{
       const filtered = foodList.filter((res)=>res.avgRating > 4.3 );
        console.log(filtered)
        setFoodList(filtered)

      }}>
      my button
      </button>
      <div className="container-box">
        {foodList.map((items)=>{

            console.log(items.info.id)
            return <Link to={"/Resturant/"+items.info.id} key={items.info.id}><ContainerList  resData={items}/></Link>
        })}
      </div>
    </div>
    )
}

export default ResturantCardList