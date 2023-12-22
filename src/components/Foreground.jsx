
import { useRef } from 'react'
import Card from './Card'
function Foreground() {
    const ref = useRef()

   const data =[
    {
      desc : 'lorem opsem dolor sit amet constructor adipiting',
      filesize : ".9MB",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "blue" }
    },
    {
      desc : 'lorem opsem dolor sit amet constructor adipiting',
      filesize : ".9MB",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green" }
    },
    {
      desc : 'lorem opsem dolor sit amet constructor adipiting',
      filesize : ".9MB",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green" }
    }
   ]
  return (
    <div ref={ref} className='fixed p-5 top-0 z-[3] w-full h-full flex gap-10 flex-wra'>
        {data.map((item , index)=>(
          <Card data={item} reference={ref}/>
        ))}
        
    </div>
  )
}

export default Foreground
