interface Props {
  type: string
  route?: string
}

const JumpStep: React.FC<Props> = ({ type, route }) => {
  const navigate = useNavigate()

  const jumpNextStep = () => {
    if (route) navigate(route)
  }

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
          onClick={jumpNextStep}
          className={`flex cursor-pointer items-center rounded-2xl border-2 px-6 text-xl 
        ${route ? 'border-primary bg-dark text-primary' : 'cursor-not-allowed border-gray bg-light text-gray'}
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
