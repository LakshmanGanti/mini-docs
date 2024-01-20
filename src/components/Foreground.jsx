import Card from './Card'
import { useState, useRef } from 'react'


function Foreground() {

    const ref = useRef(null);

    const data =  [
    {
        desc: "The main card of the docs app",
        filesize: ".9mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "The main card of the docs app",
        filesize: ".9mb",
        close: false,
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
        desc: "The main card of the docs app",
        filesize: ".9mb",
        close: true,
        tag: {isOpen: false, tagTitle: "Upload", tagColor: "green" },
    }
];
  return (
    <div  ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">

        {data.map((item, index) =>(
            <Card data={item} reference = {ref} />
        ))}
      
    </div>
  )
}

export default Foreground
