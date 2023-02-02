interface Props {
  type: string
  haveFile?: boolean
}

const JumpStep: React.FC<Props> = ({ type, haveFile = false }) => {
  const navigate = useNavigate()

  return (
    <>
      {type === 'previous' && (
        <div onClick={() => navigate(-1)} className="cursor-pointer text-xl">
          <i className="bi bi-arrow-left relative bottom-[3px] mr-1"></i>
          上一步
        </div>
      )}
      {type === 'nextStep' && (
        <div
          className={`flex cursor-pointer items-center rounded-2xl border-2 px-6 text-xl 
        ${haveFile ? 'border-primary bg-dark text-primary' : 'cursor-not-allowed border-gray bg-light text-gray'}
        `}
        >
          下一步
          <i className="bi bi-arrow-right relative bottom-[3px] ml-1"></i>
        </div>
      )}
    </>
  )
}

export default JumpStep
