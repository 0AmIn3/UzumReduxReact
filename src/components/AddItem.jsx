import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AddItem = ({ open, handleClose }) => {

    const data = useSelector(state => state.goods.data)
    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data = {
            id: uuidv4(),
            img: "https://avatars.mds.yandex.net/i?id=072aa5a23f21ab8da49c67a024bf07fb86153e31-8427500-images-thumbs&n=13",
            ...data
        }
        setGoods([...goods, data])
    }


    const [goods, setGoods] = useState()

    console.log(goods);

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
                        <form onSubmit={handleSubmit(onSubmit)} className=' px-4 overflov-hidden'>
                            <input type="text" placeholder='Add title' className='border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]' {...register("title", { pattern: /^[A-Za-z]+$/i })} />
                            <br />
                            <input type="number" placeholder='Add price' className='border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]' {...register("price", { pattern: /^[A-Za-z]+$/i })} />
                            <br />
                            <input type="text" placeholder='Add description' className='border-[1px] rounded-[24px] w-full border-[#E4E6EE] px-6 py-4 text-[gray] outline-none mt-[20px]' {...register("description", { pattern: /^[A-Za-z]+$/i })} />
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default AddItem;