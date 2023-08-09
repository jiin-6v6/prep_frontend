import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/MzListUpdateForm.css";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const editMzList = async (mzListId, restaurantInMzList, navigate) => {
  if (window.confirm("맛집 리스트를 수정하시겠습니까?")) {
    const res = await fetch(`${BACKEND_SERVER}/mzlist/${mzListId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        restaurantInMzList: restaurantInMzList.map((item) => item.restaurantId),
      }),
    }).then((response) => response.json());

    if (res.result === "fail") {
      alert(res.message);
    } else if (res.result === "success") {
      alert("정상적으로 수정했습니다.");
      navigate("/");
    } else {
      alert("Internal Server Error!");
    }
  }
};

const MzListUpdateForm = ({ mzListId }) => {
  const navigate = useNavigate();
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

  const moveRestaurantToMzList = (index) => {
    let targetRestaurant = restaurantNotInMzList[index];

    setRestaurantNotInMzList(
      restaurantNotInMzList.filter(
        (item) => item.restaurantId !== targetRestaurant.restaurantId
      )
    );

    let restaurantIdListInMzList = restaurantInMzList.map(
      (item) => item.restaurantId
    );
    if (!restaurantIdListInMzList.includes(targetRestaurant.restaurantId)) {
      setRestaurantInMzList([...restaurantInMzList, targetRestaurant]);
    }
  };

  const moveRestaurantToNotMzList = (index) => {
    let targetRestaurant = restaurantInMzList[index];

    setRestaurantInMzList(
      restaurantInMzList.filter(
        (item) => item.restaurantId !== targetRestaurant.restaurantId
      )
    );

    let restaurantIdListNotInMzList = restaurantNotInMzList.map(
      (item) => item.restaurantId
    );
    if (!restaurantIdListNotInMzList.includes(targetRestaurant.restaurantId)) {
      setRestaurantNotInMzList([...restaurantNotInMzList, targetRestaurant]);
    }
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
          {restaurantNotInMzList.map((item, index) => {
            return (
              <div
                className="restaurant_not_in_mzlist"
                key={item.restaurantId}
                onClick={() => moveRestaurantToMzList(index)}
              >
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
          {restaurantInMzList.map((item, index) => {
            return (
              <div
                className="restaurant_in_mzlist"
                key={item.restaurantId}
                onClick={() => moveRestaurantToNotMzList(index)}
              >
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
      <div className="mzlist_update_button">
        <button
          onClick={() => editMzList(mzListId, restaurantInMzList, navigate)}
        >
          저장
        </button>
      </div>
    </div>
  );
};
export default MzListUpdateForm;
