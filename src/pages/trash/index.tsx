import TrashHeader from './components/TrashHeader'
import TrashMain from './components/TrashMain'
import Container from '@/components/Container'
import Menu from '@/components/Menu'

const Home: React.FC = () => {
  return (
    <div className="flex justify-center px-3 lg:px-20">
      <Menu />
      <Container header={<TrashHeader />}>{<TrashMain />}</Container>
    </div>
  )
}

export default Home
