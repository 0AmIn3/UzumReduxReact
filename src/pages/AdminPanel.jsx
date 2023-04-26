import React, { useEffect, useState } from 'react';
import ModalAdmin from '../components/ModalAdmin';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Header from "./components/Header"

import { useDispatch, useSelector } from 'react-redux';
import TableItem from '../components/TableItem';
import AddItem from '../components/AddItem';
import HedAdmin from '../components/HedAdmin';
import { getGoodAPI } from '../features/goods/thunk';

const AdminPanel = () => {
    const cookies = new Cookies();
  const navigate = useNavigate();

    useEffect(()=>{
        if(!cookies.get("name") || cookies.get("name") == ''){
            navigate("/admin");
            console.log(cookies.get("name"));
      }
    })
    const goods = useSelector((state) => state.goods.data);
    const dispatch = useDispatch();
    const [arr, setArr] = useState(goods)
	useEffect(() => {
		if(!goods.length) {
			dispatch(getGoodAPI())
            // setArr([...goods])
            // console.log(arr);
            // console.log(goods);
		}
       
	}, [goods]);

 



  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
       
          
          <HedAdmin />
            <main className="mt-[30px] px-[24px]">
                <div className="flex items-center justify-between mb-[15px]">
                    <div className='flex items-center mb-[15px]'>
                        <p className="text-[#2E3A59] text-[24px] font-extrabold mr-[30px]">Drivers list</p>

                        <form className="flex border-[2px] rounded-[20px] border-[#F2ECFF] px-8 py-3" action="">
                            <input type="text" placeholder="Search by Name" className="outline-none text-[gray] bg-[]" />
                            <img src="/img/search.svg" alt="" />
                        </form>

                    </div>

                    <button onClick={handleOpen} className='bg-[#2E3A59] rounded-[20px] text-[#fff] ml-[30px] px-10  py-3'>Add</button>

                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, userSelect: 'none' }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ background: '#EFF0F4' }}>
                                <TableCell align='center'>Product Name</TableCell>
                                <TableCell align="center" width={600}>Description</TableCell>
                                <TableCell align="center">Total Prise</TableCell>
                                <TableCell align="center" width={100}>Sale</TableCell>
                                <TableCell align="left">To Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                           goods.length > 0 ?    goods.map((item ,inx)=> (
                            <TableItem  key={inx} item={item} />

                          )) : null
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <AddItem open={open} handleOpen={handleOpen} handleClose={handleClose} />
            </main>
        </div>
    );
};

export default AdminPanel;