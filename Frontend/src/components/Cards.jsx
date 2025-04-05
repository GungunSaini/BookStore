import React from 'react'

export default function Cards({ item }) {
    console.log(item)
    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-300 dark:bg-white dark:text-black dark:border-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions mt-2 flex justify-between text-center ">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
