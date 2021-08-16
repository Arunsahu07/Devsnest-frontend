 import {useState , useEffect} from 'react';
 function useGetData()
{  const [data, setData] = useState([]);
     useEffect(() => {
     
     fetch("https://fakestoreapi.com/products")
    .then(ret=>ret.json())
    .then(res=>{setData(res)})
   }, []);
  return data;
}

 export default useGetData;