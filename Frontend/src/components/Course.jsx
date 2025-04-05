import React, { useEffect } from 'react';
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

export default function Course() {

  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(e){
        console.log(e);
      }
    };
    getBook();
  },[]);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{" "}
                <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aut ex delectus vero voluptatibus qui quibusdam facere nostrum
                architecto, veritatis earum dolorem quam aperiam molestiae 
                quaerat? Obcaecati eius saepe maxime ex. Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Officia sed rem illum
                eaque illo, fugit libero ipsum nobis esse, asperiores, ex quas sunt ea.
            </p>
            <Link to="/">
                <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  )
}
