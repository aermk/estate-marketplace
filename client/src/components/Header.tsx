import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='test-slate-500'>Test</span>
            <span className='test-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          ></input>
          <FaSearch className='text-slate-600'></FaSearch>
        </form>

        {/* <nav> */}
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='navItem'>Home</li>
          </Link>
          <Link to='/About'>
            <li className='navItem'>About</li>
          </Link>
          <Link to='/Sign in'>
            <li className='text-slate-700 hover:underline'>Sign in</li>
          </Link>
        </ul>
        {/* </nav> */}
      </div>
    </header>
  );
};

export default Header;
