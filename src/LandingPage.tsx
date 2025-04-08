{/* LIBRARY */ }
import { useState } from 'react'

{/* STYLESHEETS */ }
import './LandingPage.css'

{/* IMAGES */ }
import up_arrow from './assets/up_arrow2.svg'
import logo2 from './assets/logo2.svg'
import profile_icon from './assets/profile_button.svg'
import settings_icon from './assets/settings.svg'
import upgrade_icon from './assets/upgrade.svg'
import logout_icon from './assets/logout.svg'

{/* COMPONENTS */ }
import OpenCanvasBtn from './canvas-components/OpenCanvasBtn'
import { generateImage,conversation } from './GPT'
import RenderCanvas from './canvas-components/RenderCanvas.tsx';

function LandingPage() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [gptResponse, setGptResponse] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  //testing boolean, false will request from OpenAI, true will return default image
  const isTesting = false;

  /////////////////////////////////////////////////////////////////////////////

  const handlePrompt = async () => {
    if (!promptText.trim()) {
      alert('The prompt box is empty. Please enter a prompt.')
      return
    }
    setShowChat(true);
    const gptResponse = await conversation(promptText);
    setGptResponse(gptResponse);

  // Get image
    const imageurl = await generateImage(promptText, isTesting);
    console.log(imageurl);
    setGeneratedImageUrl(imageurl.image);

    
    //console.log('Generating user image....', promptText)
    //let imageurl = await generateImage(promptText, isTesting)
    //console.log(imageurl)

  };

  /////////////////////////////////////////////////////////////////////////////

  function showProfile(event) {
    const profile = document.getElementById("totallyUniqueID");

    if (!profile) {
      return;
    }
    profile.style.display = "block";
    event.stopPropagation();
  }

  function closeProfile(event) {
    const profile = document.getElementById("totallyUniqueID");

    if (profile && !profile.contains(event.target)) {
      profile.style.display = "none";
    }
  }
  document.addEventListener("click", closeProfile);

  return (
    <>
      <div className="fit-width">
        {/* 1 */}
        {/* PROFILE ICON  */}
        <div onClick={showProfile} className="profile-icon-container">
          <img style={{ cursor: 'pointer', }} src={profile_icon} />
        </div>
        {/* ON START UP: DISPLAY NONE | PROFILE  */}
        <div id="totallyUniqueID" className="profile-container">
          <div className="profile">
            <div className="profile-content">
              <div className="profile-icon"><img src={profile_icon} /></div>
              <div className="profile-tabs"><img src={settings_icon} />
                <div>Settings</div>
              </div>
              <div className="profile-tabs">
                <img src={upgrade_icon} />
                <div>Upgrade</div>
              </div>
              <hr />
              <div className="profile-tabs">
                <img src={logout_icon} />
                Log Out
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="body">
        {!showChat ? (
        <>
          <div className="body-column-container">
            <div>
              <img style={{ width: '5vw' }} src={logo2} />
            </div>
            <div className="program-name">DRAW-E</div>
            <div>By Team 10</div>
            <div>Let me turn your imagination into imagery!</div>
            <div>
              <div>
                <OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen} />
                {isCanvasOpen && (
                  <div className="canvas-popup">
                    <RenderCanvas setIsCanvasOpen={setIsCanvasOpen} />
                  </div>
                )}
              </div>
            </div>
          </div>
          </>
             ) : (
            <div className="chat-view">
              <button className="back-button" onClick={() => setShowChat(false)}>
                ← Back
              </button>
              <div className="chat-bubble user">You: {promptText}</div>
              <div className="chat-bubble gpt">DRAW-E: {gptResponse}</div>
              <img className="generated-image" src={generatedImageUrl} alt="Generated art" />
            </div>
          )}
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
                      <OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen} />
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