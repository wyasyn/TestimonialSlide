import './App.scss'
import Slide from './components/Slide/Slide'
import { images } from './constants/images'
import { useState } from 'react'
import {data} from './constants/Data'
import Attribution from './components/Attribution/Attribution'

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }
    setActiveIndex(newIndex)
  }

  return (
    <>
        <div className="App">
          <div className="slider">
          {
            data.map((data, index) => (
              <div 
              className={ index === activeIndex ? 'item active' : 'item' }
              key={index}>
                    { index === activeIndex && (
                  <Slide
                  {...data}
                   />
                )
              }
              </div>
            ))
          }
            <div className="btn">
              <div className="left">
                <img src={images.prev} alt="previous" 
                        onClick={()=>{
                          updateIndex(activeIndex - 1)
                        }}
                />
              </div>
              <div className="right">
                <img src={images.next} alt="next"
                  onClick={()=>{
                    updateIndex(activeIndex + 1)
                  }}
                 />
              </div>
            </div>
          </div>
          <Attribution />
        </div>
    </>
  )
}

export default App
