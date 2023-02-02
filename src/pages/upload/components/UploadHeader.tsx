import JumpStep from '@/components/JumpStep'

const UploadHeader: React.FC = () => {
  return (
    <div className="flex justify-between">
      <JumpStep type="previous" />
      <h2>上傳檔案</h2>
      <JumpStep type="nextStep" />
    </div>
  )
}

export default UploadHeader
