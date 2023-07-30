import { useState, useEffect } from "react";

import "../assets/styles/MzListRestaurant.css";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const MzListRestaurant = ({ mzListId }) => {
  const [restaurantList, setRestaurantList] = useState([]);

  const getMzListInfo = async (mzListId) => {
    const res = await fetch(`${BACKEND_SERVER}/mzlist/${mzListId}`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    }).then((response) => response.json());
    setRestaurantList(
      res.restaurantList ? Object.values(res.restaurantList) : []
    );
  };

  useEffect(() => {
    getMzListInfo(mzListId);
  }, [mzListId]);

  return (
    <div className="mz_list_info_container">
      <div className="mz_list_info_container_header">
        <div className="mz_list_info_category_header">종류</div>
        <div className="mz_list_info_restaurant_name_header">식당</div>
        <div className="mz_list_info_restaurant_address_header">주소</div>
      </div>
      {restaurantList.map((item) => {
        return (
          <div className="mz_list_restaurant" key={item.restaurantId}>
            <div className="mz_list_restaurant_category">
              {item.restaurantCategory}
            </div>
            <div className="mz_list_restaurant_name">{item.restaurantName}</div>
            <div className="mz_list_restaurant_address">
              {item.restaurantAddress}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MzListRestaurant;
