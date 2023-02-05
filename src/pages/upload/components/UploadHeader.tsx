import { useAppSelector } from '@/store/index'
import JumpStep from '@/components/JumpStep'

const UploadHeader: React.FC = () => {
  const { file } = useAppSelector((state) => state.file)

  return (
    <div className="flex justify-between">
      <JumpStep type="previous" />
      <h2>上傳檔案</h2>
      <JumpStep type="nextStep" route={file ? '/sign' : ''} />
    </div>
  )
}

export default UploadHeader
