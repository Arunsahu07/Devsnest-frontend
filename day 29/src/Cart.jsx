import { useSelector } from "react-redux";
export default function Cart()
{
   const info = useSelector(state=>state.placeData);
    return <div> {info.location ? <div>
        <h1>
          {info.location.name}</h1>
          <div>Condition : {info.current.condition.text}</div>
          <span>Temp : {info.current.temp_c} °C</span>
          <div>Humidity : { info.current.humidity}</div>
          <div>wind : {info.current.wind_kph}kmph</div>
        
      </div> : <div>Place not found </div>}</div>
}
    
