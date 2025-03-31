
import './LandingPage.css'
import { useState } from 'react'

import up_arrow from './assets/up_arrow2.svg'
import logo2 from './assets/logo2.svg'
import profile_icon from './assets/profile_button.svg'


function LandingPage() {
  const [promptText, setPromptText] = useState('')

  const handlePrompt = () => {
    if (!promptText.trim()) {
      alert('The prompt is empty. Please enter a prompt.')
      return
    }
    console.log('Generating user image....', promptText)
    //Call GPT API HERE
  };

  return (
    <>
      <div className="fit-width">
        {/* 1 */}
        <div className="profile-icon-container">
          <img src={profile_icon} />
        </div>

        {/* 2 */}
        <div className="body">
          <div className="body-column-container">
            <div>
              <img style={{ width: '10vw' }} src={logo2} />
            </div>
            <div className="program-name">
              DRAW-E
            </div>
            <div >
              By Team 10
            </div>
            <div>
              Let me turn your imagination into imagery!
            </div>
            <div>
              <div className="new-canvas-button-main">
                Create a new canvas
              </div>
            </div>

          </div>
        </div>

        {/* 3 */}
        <div className="three-container">
          {/* positioning for input box and button*/}
          <div className="prompt-box-container">

            {/* input box and buttons*/}
            <div className="prompt-box">

              {/* text box*/}
              <form>
                <textarea className="prompt-box-text" placeholder='Ask me to draw something!' value={promptText} onChange={(e) => setPromptText(e.target.value)} />
              </form>
              {/* the buttons container*/}
              <div className='prompt-box-button-container'>

                {/* the buttons container, left side positioning */}
                <div className='prompt-box-button-container-left'>
                  {/* the buttons on the left */}
                  <div className='prompt-box-button-container-contents'>
                    <div className="plus-button">
                    +
                      <input type='file'
                        style={{
                          width: '30px',
                          height: '35px',
                          borderRadius: '20px',
                          position: 'absolute',
                          left: '0',
                          top: '0',
                          right: 0,
                          bottom: 0,
                          opacity: 0,
                        }} />
                    </div>
                    <div className="new-canvas-button">
                      New Canvas
                    </div>
                  </div>
                </div>
                <div className="prompt-box-button-container-right">
                  <div className="enter-prompt-button" onClick={handlePrompt}>
                    <img className="up-arrow-icon" src={up_arrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="warning-and-FAQ-button">
          <div className="warning">
            DRAW-E can make mistakes. Check important information.
          </div>
          <div className="FAQ-container">
            ?
          </div>
        </div>
      </div >
    </>
  )
}

export default LandingPage
