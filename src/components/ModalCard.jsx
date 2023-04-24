import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCard = ({ good , open, handleClose }) => {
    // console.log(good);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = {
      id: uuidv4(),
      img: "https://avatars.mds.yandex.net/i?id=072aa5a23f21ab8da49c67a024bf07fb86153e31-8427500-images-thumbs&n=13",
      ...data,
    };
    setGoods([...goods, data]);
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" px-4 overflov-hidden"
              >
                <input
                  defaultValue={good.title}
                  type="text"
                  placeholder="Add titssle"
                  className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                  {...register("title")}
                />
                <br />
                <input
                  defaultValue={good.price}
                  type="number"
                  placeholder="Add price"
                  className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                  {...register("price")}
                />
                <br />
                <input
                  defaultValue={good.description}
                  type="text"
                  placeholder="Add description"
                  className="border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]"
                  {...register("description" )}
                />
                <input type="submit" />
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalCard;
