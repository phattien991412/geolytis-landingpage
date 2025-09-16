import { Dispatch, SetStateAction } from 'react'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'

interface IMenuMobile {
  toggleSidebar: boolean
  setToggleSidebar: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({ toggleSidebar, setToggleSidebar }: IMenuMobile) => {
  // const pathname = usePathname()
  const nav = [
    {
      label: 'Home',
      href: '/',
    },
  ]

  return (
    <div>
      <button
        aria-label="sidebar"
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className={`${toggleSidebar ? 'opened' : ''} relative z-50 flex bg-transparent`}
        type="button"
      >
        <svg width="32" height="32" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <div
        data-toggle={toggleSidebar}
        className="fixed top-0 left-0 z-30 h-0 w-0 overflow-y-auto bg-black transition-all duration-700 data-[toggle=false]:pointer-events-none data-[toggle=true]:h-screen data-[toggle=true]:w-screen"
      >
        <ul
          data-toggle={toggleSidebar}
          className="flex flex-col gap-y-10 px-10 pt-28 text-left text-2xl leading-[130%] font-light tracking-[-0.64px] opacity-0 transition-all duration-1000 data-[toggle=true]:opacity-100"
        >
          {nav.map(({ href, label }, i) => (
            <li key={i} className="transition-all duration-300 hover:text-white">
              <Link href={href} passHref>
                <button onClick={() => setToggleSidebar(false)}>{label}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuMobile
