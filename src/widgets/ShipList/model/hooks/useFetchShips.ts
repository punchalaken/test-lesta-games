import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "@shared/api/graphql/vehicles";
import { useDispatch } from "react-redux";
import { setShip } from "@/widgets/ShipList/model/shipSlice";
import { useEffect } from "react";

export const useFetchShips = () => {
  const dispatch = useDispatch();
  const localStorageData = localStorage.getItem("vehicles");

  const { data, loading, error } = useQuery(GET_VEHICLES, {
    variables: { lang: "ru" },
    skip: localStorageData !== null,
  });

  useEffect(() => {
    if (localStorageData) {
      const vehicles = JSON.parse(localStorageData);
      dispatch(setShip(vehicles));
      console.log("Данные получены оффлайн");
    } else if (data?.vehicles) {
      const vehicles = [...data.vehicles];
      dispatch(setShip(vehicles));
      localStorage.setItem("vehicles", JSON.stringify(vehicles));
      console.log("Данные загружены в Local Storage");
    }
  }, [data, dispatch, localStorageData]);

  return { data, loading, error };
};
