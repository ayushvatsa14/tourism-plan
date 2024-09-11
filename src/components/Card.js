import React, {useState} from 'react';

function Card({id, name, info, image, price, removeTour}){
    const [readMore,setReadMore]=useState(false);
    const [description,setDescription]=useState(`${info.substring(0,195)}....`);

    function handleReadMore(){
        setReadMore(!readMore);
        handleDescription();
    }

    function handleDescription(){
        if(!readMore){
            setDescription(`${info}`);
        }
        else{
            setDescription(`${info.substring(0,195)}....`);
        }
    }

    return (
        <div className='w-[18rem] p-2 rounded-lg shadow-custom overflow-hidden'>
            <div className='overflow-hidden rounded-md'>
                <img src={image} className='h-[16rem] w-[16rem] rounded-md scale-125 overflow-hidden' />
            </div>

            <div className='pt-2 w-[16rem]'>
                <p className='px-1 text-[1.2rem] text-green-600 font-bold'>₹ {price}</p>
                <p className='text-[1.4rem] mt-[-4px] px-1 font-bold'>{name}</p>

                <div className='w-[16rem] px-1'>
                    <span className='font-semibold text-justify'>{description} </span>
                    <span onClick={handleReadMore} className='text-blue-500 cursor-pointer'>{readMore? "Show Less" : "Read More"}</span>
                </div>
            </div>

            <div className='w-[100%] mt-[1.5rem] flex justify-center items-center'>
                    <button onClick={() => removeTour(id)} className='mx-auto px-[35px] py-[4px] border-2 border-solid border-[#b4161b] text-[16px] font-bold bg-[#b4161b21] rounded-[10px] hover:bg-[red] hover:text-white transition-all duration-200ms'>Not Interested</button>
            </div>
        </div>
    );
}

export default Card;