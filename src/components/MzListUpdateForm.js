import { useEffect, useState } from "react";
import "../assets/styles/MzListUpdateForm.css";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const MzListUpdateForm = ({ mzListId }) => {
  const [restaurantInMzList, setRestaurantInMzList] = useState([]);
  const [restaurantNotInMzList, setRestaurantNotInMzList] = useState([]);

  const getRestaurantMzList = async (mzListId) => {
    const res = await fetch(`${BACKEND_SERVER}/mzlist/${mzListId}/restaurant`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    }).then((response) => response.json());
    setRestaurantInMzList(
      res.restaurantListInMzList
        ? Object.values(res.restaurantListInMzList)
        : []
    );
    setRestaurantNotInMzList(
      res.restaurantListNotInMzList
        ? Object.values(res.restaurantListNotInMzList)
        : []
    );
  };

  useEffect(() => {
    getRestaurantMzList(mzListId);
  }, [mzListId]);

  return (
    <div className="MzListUpdateForm">
      <div className="restaurant_list_container">
        <div className="restaurant_not_in_mzlist_container">
          <div className="restaurant_not_in_mzlist_container_header">
            식당 목록
          </div>
          {restaurantNotInMzList.map((item) => {
            return (
              <div className="restaurant_not_in_mzlist" key={item.restaurantId}>
                <div className="restaurant_not_in_mzlist_name">
                  {item.restaurantName}
                </div>
                <div className="restaurant_not_in_mzlist_address">
                  {item.restaurantAddress}
                </div>
                <div className="restaurant_not_in_mzlist_category">
                  {item.restaurantCategory}
                </div>
              </div>
            );
          })}
        </div>
        <div className="restaurant_in_mzlist_container">
          <div className="restaurant_in_mzlist_container_header">
            맛집리스트 내에 존재하는 식당 목록
          </div>
          {restaurantInMzList.map((item) => {
            return (
              <div className="restaurant_in_mzlist" key={item.restaurantId}>
                <div className="restaurant_in_mzlist_name">
                  {item.restaurantName}
                </div>
                <div className="restaurant_in_mzlist_address">
                  {item.restaurantAddress}
                </div>
                <div className="restaurant_in_mzlist_category">
                  {item.restaurantCategory}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MzListUpdateForm;
