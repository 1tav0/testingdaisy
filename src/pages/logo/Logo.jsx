import SearchIcon from '@mui/icons-material/Search';

const Logo = () => {
  return (
    <div className="bg-red-500  flex justify-center p-1 ">
      <div className="bg-green-700 flex justify-center gap-20 p-10 rounded-[30%] w-1/2">
        <img className='w-10 ' src='https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg' alt='onlinepic'/>
        <img  className='flex justify-center ' src='/vite.svg' alt='' />
        <input className=' flex justify-center bg-white rounded-lg px-4 py-2' type='text' placeholder='search'/>
        <div className='bg-green-600 rounded-full flex items-center justify-center h-10 w-10 absolute '>
          <SearchIcon />
          <SearchIcon />
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Logo