import ArchiveHeader from './components/ArchiveHeader'
import ArchiveMain from './components/ArchiveMain'
import Container from '@/components/Container'
import Menu from '@/components/Menu'

const Home: React.FC = () => {
  return (
    <div className="flex justify-center px-3 lg:px-20">
      <Menu />
      <Container header={<ArchiveHeader />}>{<ArchiveMain />}</Container>
    </div>
  )
}

export default Home
