import {useState} from 'react';
export default function useToggle()
{
    const [val ,setToggle] = useState(false);
    return [val,setToggle]  
}