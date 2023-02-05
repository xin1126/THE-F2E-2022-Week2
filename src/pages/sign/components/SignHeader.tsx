import { useAppSelector } from '@/store/index'
import JumpStep from '@/components/JumpStep'

const SignHeader: React.FC = () => {
  const { file } = useAppSelector((state) => state.file)

  return (
    <div className="flex justify-between">
      <JumpStep type="previous" />
      <h2>簽署文件</h2>
      <JumpStep type="nextStep" route={''} />
    </div>
  )
}

export default SignHeader
