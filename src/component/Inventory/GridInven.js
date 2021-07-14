import React, { useState } from "react";
import "./GridInven.css";
import data from "./fakeInven.json";
import Pagination from "../Pagination/Pagination";

const handleRankImg = (rank) => {
  switch (rank) {
    case "Iron":
      return "/rank/iron.png";
    case "Bronze":
      return "/rank/bronze.png";
    case "Silver":
      return "/rank/silver.png";
    case "Gold":
      return "/rank/gold.png";
    case "Platinum":
      return "/rank/platinum.png";
    case "Diamond":
      return "/rank/diamond.png";
    case "Immortal":
      return "/rank/immortal.png";
    case "VALORANT":
      return "/rank/VALORANT.png";
    default:
      return "/rank/iron.png";
  }
};
const priceFormat = (num) => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
export default function GridInven() {
  // const [WindowSize, setWindowSize] = useState(window.innerWidth);
  const [ItemsPerPage, setItemsPerPage] = useState(
    window.innerWidth > 992 ? 8 : 4
  );
  // const [Loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1);
  // const [Items, setItems] = useState([]);
  const indexOfLastItem = CurrentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  window.addEventListener("resize", () => {
    // setWindowSize(window.innerWidth);

    ((window.innerWidth> 992 && ItemsPerPage === 4) ||
      (window.innerWidth <= 992 && ItemsPerPage === 8)) &&
      setCurrentPage(1);

    window.innerWidth > 992 && ItemsPerPage === 4 && setItemsPerPage(8);
    window.innerWidth <= 992 && ItemsPerPage === 8 && setItemsPerPage(4);
  });

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mainContent-container">
      <div className="inven-container">
        {currentItems.map((item) => {
          return (
            <div className="item-container">
              <img src="test.png" className="item-thumb" alt="item-thumb" />
              <div className="item-info-container">
                <p className="item-rank">
                  <strong>Rank: </strong>
                  {item.rank}{" "}
                </p>
                <img
                  src={handleRankImg(item.rank)}
                  className="item-rank-img"
                  alt={item.rank}
                />
                <p className="item-skin-num">
                  <strong>Skin: </strong> {item.skin_num}
                </p>
                <p className="item-price">{priceFormat(item.price)}đ</p>
              </div>
              <button className="buy-button">MUA NGAY</button>
            </div>
          );
        })}
      </div>
      <Pagination
        ItemsPerPage={ItemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={CurrentPage}
      />
    </div>
  );
}
