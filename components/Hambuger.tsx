"use client";
import { FaHamburger } from 'react-icons/fa';
import { AiFillCloseSquare, AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';


export default function Hambuger() {
   const [isOpen, setIsOpen] = useState(false);
   const changeIcon = () => {
      setIsOpen(!isOpen);
   }
   return (
      <div className="lg:hidden hover:cursor-pointer transition-all" onClick={changeIcon}>
         {isOpen ? (
            <AiFillCloseSquare
               size={40}
               className='fill-slate-800'
            />

         ) : (

            <AiOutlineMenu
               size={40}
               className='fill-slate-800'
            />
         )}
      </div>
   )
}