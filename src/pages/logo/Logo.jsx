import SearchIcon from '@mui/icons-material/Search';

const Logo = () => {
  return (
    <div className="bg-red-500 p-20 flex justify-center">
      <div className="bg-green-800 flex justify-center gap-20 p-10 rounded-full w-1/2">
        <img src='/vite.svg' alt='' />
        <input className='bg-white rounded-lg px-4 py-2' type='text' placeholder='search'/>
        <div className='bg-green-500 rounded-full flex items-center justify-center h-10 w-10'>
          <SearchIcon />
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Logo