import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { basketCTX } from "../contexts/basketCTX";
import { SlBasket } from "react-icons/sl";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { useSelector } from "react-redux";
const Headerr = () => {
  const arr = useSelector((state) => state.goods.data);
  const cart = useSelector((state) => state.cart.data);
  const [modal, setModal] = useState(false);
  const [SearchResult, setSearchResult] = useState([]);
  const [whatmodal, setWhatmodal] = useState("");
  let cotigor = arr.map((item) => item.type);
  cotigor = [...new Set(cotigor)];
  function openModal() {
    let modala = document.querySelector(".modal");
    let catalog = document.querySelector(".catalog");
    let search = document.querySelector(".searchh");
    if (modal) {
      modala.style.display = "flex";

      if (window.innerWidth > 733) {
        modala.style.top = "84px";
      } else {
        modala.style.top = "120px";
      }
    } else {
      modala.style.top = "-1000px";
      setTimeout(() => {
        modala.style.display = "none";
      }, 300);
    }
    if (whatmodal) {
      catalog.style.display = "block";
      search.style.display = "none";
    } else if (!whatmodal) {
      search.style.display = "block";
      catalog.style.display = "none";
    } else {
    }
  }
  function Search(val) {
    val = val.toLowerCase();
    if (val.length > 0) {
      let as = arr.filter((item) => item.title.toLowerCase().includes(val));
      setSearchResult(as);
    } else {
      setSearchResult([]);
    }
  }
  useEffect(() => {
    openModal();
  }, [modal]);
  return (
    <div className="w-full h-[84px] relative header flex  items-center justify-between gap-[15px] ">
      <div className="flex  items-center  ">
        <Link to={"/"} className="w-[200px] logo">
          <img src="/icons/logo.svg" alt="" />
        </Link>
      </div>
      <div className="w-[40%] h-full search flex items-center gap-[5px]">
        <Link to={"/catalog"}>
          <div className=" bg-[#EAEAF9]  px-[15px] py-[5px] text-[#3333CC]">
            <p className="cat">Каталог</p>
          </div>
        </Link>
        <form
          action=""
          className="w-full h-[32px] SearchBorder flex items-center px-3 "
        >
          <input
            type="text"
            placeholder="Искать товары"
            className="w-full bg-transparent lineNone h-full"
            onClick={() => {
              modal ? setModal(false) : setModal(true);
              setWhatmodal(false);
            }}
            onKeyUp={(e) => Search(e.target.value)}
          />
          <AiOutlineSearch />
        </form>
      </div>
      <div className="flex  items-center gap-5">
        {/* <Link to={"/admin"} className="flex items-center gap-2">
          <CgProfile />
          <p className="adios">Шахзод</p>
        </Link> */}
        <Link to={"/liked"} className="flex items-center gap-2">
          <AiFillHeart style={{ color: "red", fontSize: "20px" }} />
          <div className="adios">Избранное</div>
        </Link>
        <Link to={"/basket"}>
          <div className="flex items-center gap-2">
            <SlBasket />
            <p className="adios">Корзина</p>
            <p className="bg-[#7000FF] w-[16px] text-xs h-[16px] flex items-center justify-center text-white">
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full h-fit absolute modal flex items-center justify-center bg-[white]">
        <div className="w-[256px] catalog ">
          {cotigor.map((item, inx) => (
            <Link
              to={`/#${item}`}
              onClick={() => {
                setModal(false);
              }}
              key={inx}
            >
              <p key={inx}>{item}</p>
            </Link>
          ))}
        </div>
        <div className="w-[100%] searchh ">
          {SearchResult.length >= 1 ? (
            SearchResult.map((item, inx) => (
              <Link
                to={"/product/" + item.id}
                onClick={() => {
                  setModal(false);
                  setSearchResult([]);
                }}
              >
                <p key={inx}>{item.title}</p>
              </Link>
            ))
          ) : (
            <p>Нет Резульнатов</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headerr;
