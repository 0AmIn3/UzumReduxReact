import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const ModalAdmin = ({ item, changeGoods ,changeModal}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.patch(`http://localhost:3001/goods/${item.id}`, data).then((r) => {
      axios.get("http://localhost:3001/goods").then((res) => {
        localStorage.setItem("goods", JSON.stringify(res.data));
        changeGoods(res.data);
      });
    });
  };
  return (
    <>
      <div className="modalpanelbg" onClick={changeModal}></div>

      <div className="modalpanel">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-2   "
        >
          <input
            defaultValue={item.title}
            {...register("title", { required: true })}
          />
          <input
            defaultValue={item.description}
            {...register("description", { required: true })}
          />
          <input
            defaultValue={item.price}
            {...register("price", { required: true })}
          />
          <input
            defaultValue={item.type}
            {...register("type", { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default ModalAdmin;
