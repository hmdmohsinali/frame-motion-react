
import Card from './Card'
function Foreground() {
   const data =[
    {
      desc : 'lorem opsem dolor sit amet constructor adipiting',
      filesize : ".9MB",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green" }
    }
   ]
  return (
    <div className='fixed top-0 z-[3] w-full h-full'>
        {data.map((item , index)=>(
          <Card data={item}/>
        ))}
        
    </div>
  )
}

export default Foreground
