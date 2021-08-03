import { useSelector } from "react-redux";
export default function Cart()
{  const toggle = useSelector(state=>state.theme);

   const info = useSelector(state=>state.placeData);
    return <div className={` ${toggle ? "dark" : 'light'  }`}> {info.location ? <div className={` ${toggle ? "dark" : 'light'  }`}>
        <h1>
          {info.location.name}</h1>
          <img src={info.current.condition.icon} />
          <div>Condition : {info.current.condition.text}</div>
          <span>Temp : {info.current.temp_c} °C</span>
          <div>Humidity : { info.current.humidity}</div>
          <div>wind : {info.current.wind_kph}kmph</div>
        
      </div> : <div>Place not found </div>}</div>
}
    
