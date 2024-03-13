import { useMemo, useState } from 'react'

function Assignment4() {
  const [count, setCount] = useState();
  const [para, setPara] = useState();

  const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?"

  const arr = useMemo(()=>{
    return str.split(' ');
  },[])

  const handleSubmit =()=>{
    if(count < 0){
      alert("don't enter values below 0");
    }
    let temp = [];
    for(let i = 0; i < count; i++){
      temp.push(arr[Math.floor(Math.random() * arr.length)])
    }
    setPara(temp.join(' '))
    setCount(0);
  }


  return (
    <>
        <h1 className='flex items-center justify-center w-full pt-20 pb-5 font-bold'>
        Generate Paragraph
        </h1>
        <div className='flex justify-center w-full gap-2 '>
          <input
            className='border-2 w-[50%] border-black '
            type='number'
            value={count}
            placeholder='Enter  number of words to generate'
            onChange={(e) => {
              setCount(e.target.value)
            }}
          />
          <button
            className='p-2 text-white bg-black border-2 border-black rounded-lg'
            onClick={handleSubmit}
          >
            Submit
          </button>
          </div>
          <div className='flex justify-center w-full '>
            <p className='flex items-center justify-center w-[80%] py-4'>
              {para}
            </p>
          </div>
    </>
)
}

export default Assignment4