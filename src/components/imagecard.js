import React, { useState } from "react";

const ImageCard = (props) => {
    const [filter,setFilter] = useState('')
    let myTags = props.tags
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={props.image} alt='random photo' className='w-full scale-100 hover:scale-110 ease-in duration-500'/>
        <div className='px-6 py-4 '>
            <div className='font-bold text-emerald-600 text-xl mb-2'>
                Photo by Ahmed El-Kilany
            </div>
            <ul>
                <li>
                    <strong className="text-gray-700">Views: </strong> {props.views}
                </li>
                <li>
                    <strong className="text-gray-700">Downloads: </strong> {props.downloads}
                </li>
                <li>
                    <strong className="text-gray-700">Likes: </strong> {props.likes}
                </li>
            </ul>
        </div>
            <div className="px-6 py-4">
                <span onClick={(e)=> {
                    e.preventDefault()
                    setFilter(myTags[0])
                    props.filterTag(myTags[0])
                    }} className="mr-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700 hover:underline"> {props.tags[0]} </span>
                <span onClick={(e)=> {
                    e.preventDefault()
                    setFilter(myTags[1])
                    props.filterTag(filter)
                    }} className="mr-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700 hover:underline"> {props.tags[1]} </span>
                <span onClick={(e)=> {
                    e.preventDefault()
                    setFilter(myTags[2])
                    props.filterTag(filter)
                    }} className="mr-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700  hover:underline"> {props.tags[2]} </span>
          </div>
    </div>

    )
}

export default ImageCard