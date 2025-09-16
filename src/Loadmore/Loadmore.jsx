import React from "react";
import "./Loadmore.css";
import { PaginationStore } from "../States/PaginationStore";
import { sliceStore } from "../States/SliceStore";
const Loadmore = ({}) => {
  const { setLimit, setOffset } = PaginationStore();
  const setSlice = sliceStore((state) => state.setSlice);
  const handleClick = () => {
    setLimit(6);
    setOffset(6);
    setSlice(6);
  };
  return (
    <button className="load-more" onClick={handleClick}>
      <p className="load-p">Load more</p>
    </button>
  );
};

export default Loadmore;
