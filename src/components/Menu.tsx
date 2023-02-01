import { NavLink } from 'react-router-dom'

import file from '@/assets/images/icon/ic_file_h.svg'
import trash from '@/assets/images/icon/ic_trash_h.svg'
import archive from '@/assets/images/icon/ic_archive_h.svg'

interface Props {
  isActive: boolean
  children: JSX.Element
}

const Box: React.FC<Props> = ({ isActive, children }) => {
  return (
    <div
      className={`relative mb-[10px] cursor-pointer overflow-hidden rounded-l-[40px] border-2 border-r-0 py-5 pl-5 pr-3 shadow-2xl
      ${isActive ? 'border-primary bg-white' : 'border-dark bg-gray'}
      `}
    >
      <div className="absolute top-0 -right-[108px] h-full w-[100px] shadow-[0_5px_12px_7px]"></div>
      {children}
    </div>
  )
}

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <div className="mt-[100px]">
      <NavLink to="/">
        <Box isActive={location.pathname === '/'}>
          <img src={file} alt="file" />
        </Box>
      </NavLink>
      <NavLink to="/archive">
        <Box isActive={location.pathname === '/archive'}>
          <img src={archive} alt="archive" />
        </Box>
      </NavLink>
      <NavLink to="/trash">
        <Box isActive={location.pathname === '/trash'}>
          <img src={trash} alt="trash" />
        </Box>
      </NavLink>
    </div>
  )
}

export default Menu
