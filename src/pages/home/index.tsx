import HomeHeader from './components/HomeHeader'
import HomeMain from './components/HomeMain'
import Container from '@/components/Container'
import Menu from '@/components/Menu'

const Home: React.FC = () => {
  return (
    <div className="flex justify-center px-3 lg:px-20">
      <Menu />
      <Container header={<HomeHeader />}>{<HomeMain />}</Container>
    </div>
  )
}

export default Home
