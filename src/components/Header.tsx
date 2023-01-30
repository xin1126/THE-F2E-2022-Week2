import logo from '@/assets/images/logo/logo_darkbg_horizontal.png'
import help from '@/assets/images/icon/ic_help.svg'
import helpH from '@/assets/images/icon/ic_help_h.svg'
import user from '@/assets/images/icon/ic_user.svg'
import userH from '@/assets/images/icon/ic_user_h.svg'

const Header: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="container flex justify-between py-4">
        <img className="w-[300px]" src={logo} alt="logo" />
        <div className="flex">
          <div className="group flex cursor-pointer items-center">
            <img className="mr-4 w-[32px] group-hover:hidden" src={help} alt="help" />
            <img className="mr-4 hidden w-[32px] group-hover:block" src={helpH} alt="help" />
          </div>
          <div className="group cursor-pointer">
            <img className="w-[50px] group-hover:hidden" src={user} alt="user" />
            <img className="hidden w-[50px] group-hover:block" src={userH} alt="user" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
