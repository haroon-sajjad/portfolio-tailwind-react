/* import { hamburger } from "../assets/icons"; */
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

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
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex flex-col items-end gap-2 text-lg leading-normal font-medium font-montserrat  wide:mr-24'>
          <a href='https://cal.com/haroon.sajjad/30min/' target="__blank" className="px-5 py-3 border font-montserrat text-sm leading-none
      bg-orange-600 text-white border-orange-600 rounded-full">Book a Call</a>
        </div>
        {/* <div className='flex flex-col items-end gap-2 text-lg leading-normal font-medium font-montserrat  wide:mr-24'>
          <a href='mailto:haroon.sajjad@outlook.com'>haroon.sajjad@outlook.com</a>
          <a href='tel:+923139660005'>+92 (313) 966-0005</a>
        </div> */}
        {/* <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
