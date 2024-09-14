"use client"
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { deleteTopic } from '@/redux/action/api';
const RemoveBtn = ({ id }) => {
    const dispatch = useDispatch();
    const removeTopic = async (id) => {
        dispatch(deleteTopic(id))
        // const confirmed = window.confirm('Are you sure?');

        // if (id) {
       
        // }
    };

    return (
        <button onClick={() => removeTopic(id)} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
};

export default RemoveBtn;
