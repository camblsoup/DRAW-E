

{/* IMAGES*/ }
import up_arrow from './assets/up_arrow2.svg'
import handlePrompt from '../LandingPage.tsx'

interface Props {
    setPromptText: (text: String) => String;
    promptText: String
}
export default function TextPromptBox({setPromptText, promptText}: Props){

    return <div className="three-container">
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
}