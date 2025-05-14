import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

export const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
}