import "./Blog.css"
import Post from "../Post/Post"
import Headers from "../Headers/Headers.jsx"
import { Spacer_1,Spacer_2,Spacer_3,Spacer_4 } from "../Spacer/Spacer.jsx"
import Footer from "../Footer/Footer.jsx"
const Blog = () => {
  return (
    <div className="background">
      <Spacer_1></Spacer_1>
      <Headers/>
      <Spacer_2/>
      <div className='main-div'>
          <div className='posts'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
      </div>
      <Spacer_3/>
      <Footer/>
      <Spacer_4/>
    </div>
  )
}

export default Blog
