import UploadHeader from './components/UploadHeader'
import UploadMain from './components/UploadMain'
import Container from '@/components/Container'

const Upload: React.FC = () => {
  return (
    <div className="flex justify-center px-3 lg:px-20">
      <Container header={<UploadHeader />}>{<UploadMain />}</Container>
    </div>
  )
}

export default Upload
