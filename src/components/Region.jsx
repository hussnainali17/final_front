import React from 'react'
const items = [
  { id: 1, name: 'North America', img: 'https://i.postimg.cc/jdmP3RVm/icon.png' ,text:'shopname.ae'},
  { id: 2, name: 'Europe', img: 'https://i.postimg.cc/7Yt10gY3/icon-1.png',text:'shopname.ae' },
  { id: 3, name: 'Asia', img: 'https://i.postimg.cc/Z51rD4N0/icon-2.png',text:'shopname.ae' },
  { id: 4, name: 'Africa', img: 'https://i.postimg.cc/XYZf8ppT/icon-4.png',text:'shopname.ae' },
  { id: 5, name: 'Australia', img: 'https://i.postimg.cc/DzL19HQ6/icon-5.png',text:'shopname.ae' },
  { id: 6, name: 'South America', img: 'https://i.postimg.cc/B6324pM0/icon-6.png',text:'shopname.ae' },
  { id: 7, name: 'Antarctica', img: 'https://i.postimg.cc/HxtXxMh7/icon-7.png',text:'shopname.ae' },
  { id: 8, name: 'Middle East', img: 'https://i.postimg.cc/J04JBhfY/icon-8.png',text:'shopname.ae' },
  { id: 9, name: 'Central America', img: 'https://i.postimg.cc/zvthwr5z/icon-9.png',text:'shopname.ae' },
  { id: 10, name: 'Caribbean', img: 'https://i.postimg.cc/zvthwr5z/icon-9.png',text:'shopname.ae' },
];

const Region = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto rounded-lg mt-2 p-3'>
      <p className='font-semibold text-xl'>Supplier by Region</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-2'>
        {
          items.map(item => (
            <div key={item.id + item.name} className='flex p-3 gap-2 items-center bg-white rounded-md shadow'>
              <img src={item.img} alt={item.name} className='w-[28px] h-[20px] object-cover mt-2' />
              <div>
                <h3 className='text-[14px]'>{item.name}</h3>
                <p className='text-[10px] text-gray-500'>{item.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Region