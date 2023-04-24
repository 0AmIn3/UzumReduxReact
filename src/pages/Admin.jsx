import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Admin = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("adminUsers"))
  );
  useEffect(() => {
    if (!localStorage.getItem("adminUsers")) {
      axios
        .get("http://localhost:3001/users")
        .then((res) =>
          localStorage.setItem("adminUsers", JSON.stringify(res.data))
        );
    }
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const cookies = new Cookies();
    if (
      users.filter(
        (item) => data.name == item.name && item.password == data.password
      ).length > 0
    ) {
      navigate("/admin/panel");
      cookies.set("name", data.name, { path: "/" });
      console.log(cookies.get("name"));
    }
  };
  return (
    <div>
      <h1>admin</h1>
      <center className=" bg-red-600">
        <h1>login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <input {...register("name", { required: true })} />
          <input {...register("password", { required: true })} />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};

export default Admin;
