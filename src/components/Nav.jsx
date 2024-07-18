import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='./'>
          <img
            src={headerLogo}
            alt='logo'
            width={150}
            height={50}
            className='m-0 w-auto h-[40px]'
          />
        </a>
        <div className='flex flex-col items-end gap-2 text-lg leading-normal font-medium font-montserrat  wide:mr-24'>
          <a href='https://cal.com/haroon.sajjad/30min/' target="__blank" className="px-5 py-3 border font-montserrat text-sm leading-none
      bg-orange-600 text-white border-orange-600 rounded-full">Book a Call</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
