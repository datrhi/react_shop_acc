import React from "react";
import "./SearchTable.css";
export default function SearchTable() {
  return (
    <div>
      <form className="search-container">
        <div className="search-title">CHỌN THUỘC TÍNH LỌC</div>
        <button className="search-button">TÌM KIẾM</button>
        <button className="cancel-button">HỦY BỎ</button>
        <select className="search-item" id="find-by-rank">
          <option value="">Tìm theo rank</option>
          <option value="Iron">Sắt</option>
          <option value="Bronze">Đồng</option>
          <option value="Silver">Bạc</option>
          <option value="Gold">Vàng</option>
          <option value="Platium">Bạch kim</option>
          <option value="Diamond">Kim cương</option>
          <option value="Immortal">Bất tử</option>
          <option value="Radiant">VALORANT</option>
        </select>

        <select className="search-item" id="find-by-price">
          <option value="">Tìm theo giá</option>
          <option value="200k-1m">Acc 200k - 1m</option>
          <option value="1m-2m">Acc 1m - 2m</option>
          <option value="2m-5m">Acc 2m - 5m</option>
          <option value="5m-10m">Acc 5m - 10m</option>
          <option value=">10m">Acc hơn 10m</option>
        </select>
        <input className="search-item" id="find-by-skin" placeholder='Tìm theo skin'/>
        <select className="search-item">
            <option value=''>Sắp xếp theo</option>
            <option value='price'>Giá thấp đến cao</option>
            <option value='rank'>Rank thấp đến cao</option>
        </select>
      </form>
    </div>
  );
}
