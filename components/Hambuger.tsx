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
               color='white'
               size={40}
            />

         ) : (

            <AiOutlineMenu
               color='white'
               size={40}
            />
         )}
      </div>
   )
}