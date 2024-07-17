import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Introduction from './components/Introduction'
import About from './components/About'
import Songs from './components/Songs'

function App() {


  return (
    <div id='container'>
      <Header/>
      <Carousel/>
      <Introduction/>
      <About/>
      <Songs/>
    </div>
  )
}

export default App
