
import './LandingPage.css'

import up_arrow from './assets/up_arrow2.svg'
import logo2 from './assets/logo2.svg'
import profile_icon from './assets/profile_button.svg'


function LandingPage() {

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
                <textarea className="prompt-box-text" placeholder='Ask me to draw something!' />
              </form>
              {/* the buttons container*/}
              <div className='prompt-box-button-container'>

                {/* the buttons container, left side positioning */}
                <div className='prompt-box-button-container-left'>
                  {/* the buttons on the left */}
                  <div className='prompt-box-button-container-contents'>
                    <div className="plus-button">
                      +
                    </div>
                    <div className="new-canvas-button">
                      New Canvas
                    </div>
                  </div>
                </div>
                <div className="prompt-box-button-container-right">
                  <div className="enter-prompt-button">
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
