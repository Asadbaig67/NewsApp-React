import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsSection from './components/NewsSection'
import About from './components/About'
// import LoadingBar from 'react-top-loading-bar'
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";
export default class App extends Component {
   // state = {
   //    progress: 0,
   // }
   // setProgress = (Custom_Progress) => {
   //    this.setState({ progress: Custom_Progress })
   // }
   render() {
      return (
         <div>
            <Router>
               <Navbar />
               {/* <LoadingBar
                  color='red'
                  progress={this.state.progress}
               // onLoaderFinished={() => setProgress(0)}
               /> */}
               <Routes>
                  <Route exact path="/" element={<NewsSection setProgress={this.setProgress} key='general' pageSize={4} Country={'us'} Category={'general'} Topic={'General'} />} />
                  <Route exact path="/business" element={<NewsSection setProgress={this.setProgress} key='business' pageSize={4} Country={'us'} Category={'business'} Topic={'Business'} />} />
                  <Route exact path="/entertainment" element={<NewsSection setProgress={this.setProgress} key='entertainment' pageSize={4} Country={'us'} Category={'entertainment'} Topic={'Entertainment'} />} />
                  <Route exact path="/health" element={<NewsSection setProgress={this.setProgress} key='health' pageSize={4} Country={'us'} Category={'health'} Topic={'Health'} />} />
                  <Route exact path="/science" element={<NewsSection setProgress={this.setProgress} key='science' pageSize={4} Country={'us'} Category={'science'} Topic={'Science'} />} />
                  <Route exact path="/sports" element={<NewsSection setProgress={this.setProgress} key='sports' pageSize={4} Country={'us'} Category={'sports'} Topic={'Sports'} />} />
                  <Route exact path="/technology" element={<NewsSection setProgress={this.setProgress} key='technology' pageSize={4} Country={'us'} Category={'technology'} Topic={'Technology'} />} />
                  <Route path="/about" element={<About />} />
               </Routes>
            </Router>
         </div >
      )
   }
}

