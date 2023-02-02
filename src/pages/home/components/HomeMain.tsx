import add from '@/assets/images/icon/ic_add_dark.svg'

const HomeMain: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <img
        onClick={() => navigate('/upload')}
        className="mb-6 w-[136px] cursor-pointer duration-200 hover:scale-90"
        src={add}
        alt="add"
      />
      <p className="text-4xl">快來建立新檔吧</p>
    </div>
  )
}

export default HomeMain
