
import './LandingPage.css'

function LandingPage() {

  return (
    <>
      <div className="fit-width">
        {/* 1 */}
        <div className="profile-icon-container">
          ●
        </div>

        {/* 2 */}
        <div className="body">
          john
        </div>

        {/* 3 */}
        <div className="three-container">
          <div className='prompt-box-container'>
            <div className="prompt-box">
              <input className="prompt-box-text" type='text-area' placeholder='Ask me to draw something!' />
            </div>
            <div className='prompt-box-button-container'>
              <div style={{}}>
                <div>
                  1
                </div>
                <div>
                  2
                </div>
              </div>
              <div>
                3
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
      </div>
    </>
  )
}

export default LandingPage
