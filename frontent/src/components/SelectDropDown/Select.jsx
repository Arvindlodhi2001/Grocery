import React, { useState } from "react";
import "./Select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  // Initialize state with array checks
  const [IsOpenSelect, setIsOpenSelect] = useState(false);
  const [SelectIndex, setSelectIndex] = useState(0);
  const [SelectItem, setSelectItem] = useState(placeholder);
  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const DropDownHandel = () => {
    setIsOpenSelect(!IsOpenSelect);
  };

  const closeSelect = (Index, item) => {
    setSelectIndex(Index);
    setIsOpenSelect(false);
    const name = item?.name || item;
    if (name.length > 12) {
      setSelectItem(name.substring(0, 12) + "...");
    } else {
      setSelectItem(name);
    }
  };

  const FilterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (Array.isArray(listData2)) {
      const list = listData2.filter((item) => {
        return (item.name || item).toLowerCase().includes(keyword);
      });
      setListData(list);
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
        <div className="SelectDrop position-relative">
          <span className="openSelect" onClick={DropDownHandel}>
            {icon}
            {SelectItem}
            {IsOpenSelect ? (
              <KeyboardArrowDownIcon className="arrow" />
            ) : (
              <KeyboardArrowRightIcon className="arrow" />
            )}
          </span>
          {IsOpenSelect && (
            <div className="SelectDropdown">
              <div className="searchFeild">
                <input
                  type="text"
                  placeholder="Select Category"
                  onChange={FilterList}
                />
              </div>
              <ul className="searchResults">
                <li
                  key={0}
                  onClick={() => closeSelect(0, placeholder)}
                  className={`${SelectIndex === 0 ? "active" : ""}`}
                >
                  {placeholder}
                </li>
                {listData.map((item, Index) => (
                  <li
                    key={Index + 1}
                    onClick={() => closeSelect(Index + 1, item)}
                    className={`${SelectIndex === Index + 1 ? "active" : ""}`}
                  >
                    {item.name || item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Select;
