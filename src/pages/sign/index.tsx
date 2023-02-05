import SignHeader from './components/SignHeader'
import SignMain from './components/SignMain'
import Container from '@/components/Container'

const Upload: React.FC = () => {
  return (
    <div className="flex justify-center px-3 lg:px-20">
      <Container header={<SignHeader />}>{<SignMain />}</Container>
    </div>
  )
}

export default Upload
