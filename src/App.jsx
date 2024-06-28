import React, { useRef, useState } from "react";
import headImage from "../public/header.gif";
import heartImage from "../public/heart.png";
import celebAudio from "../public/nakuch.mp3";
import borderUp from "../public/borderup.png";
import borderDown from "../public/borderdo.png";
import hand from "../public/hand.gif";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [textColor, setTextColor] = useState("white");

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setAudioPlayed(true);
        })
        .catch((error) => {
          console.log("Play failed:", error);
        });
    }
  };

  const toggleTextColor = () => {
    setTextColor((prevColor) => (prevColor === "white" ? "red" : "white"));
  };

  return (
    <>
      <div className="main" onScrollCapture={handlePlayAudio}>
        <div className="border_image">
          <img src={borderUp} style={{ width: "100%" }} height={"100px"} />
        </div>
        <div className="header_info">
          <div></div>
        </div>
        <div className="header_info">
          <div>
            <b>
              <h2>Celebrating</h2>
            </b>
          </div>
        </div>
        <img
          src={headImage}
          alt="header"
          style={{ width: "100%", height: "40vh" }}
        />
      </div>
      <div className="header_info">
        <div>
          <b>
            <h2>Of</h2>
          </b>
        </div>
      </div>
      <div className="header_info">
        <div>
          <b>
            <h2>Ashok Sah ❤️ Radha Devi</h2>
          </b>
        </div>
      </div>
      <div
        className="heart_image"
        onClick={() => handlePlayAudio()}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-18%",
            right: "39%",
            zIndex: "1",
          }}
          onClick={() => handlePlayAudio()}
        >
          <img src={hand} width="80px" />
        </div>
        <img
          src={heartImage}
          style={{ width: "70%" }}
          onMouseEnter={() => toggleTextColor()}
          onMouseLeave={() => toggleTextColor()}
        />
      </div>
      <audio ref={audioRef} src={celebAudio} id="audioId" />
      <div className="header_message" style={{ marginTop: "13%" }}>
        <div>Dear Family, and Friends☺️</div>
      </div>
      <div className="header_message">
        <div>🎉 Join Us to Celebrate 50 Years of Love! 🎉</div>
      </div>
      <br></br>
      <div className="header_message">
        <div>We are excited to invite you to celebrate</div>
      </div>
      <div className="header_message">
        <div>the 50th wedding anniversary of our</div>
      </div>
      <div className="header_message">
        <div>wonderful parents, </div>
      </div>
      <div className="header_message">
        <div>Ashok Sah and Radha Devi! 💖</div>
      </div>
      <div className="header_message">
        <div>Their journey together has been full of love,</div>
      </div>
      <div className="header_message">
        <div>and we want to celebrate this special day</div>
      </div>
      <div className="header_message">
        <div>with you all. 🥳</div>
      </div>
      <br></br>
      <div className="header_message">
        <div>So, Come raise a toast to their</div>
      </div>
      <div className="header_message">
        <div>beautiful love story and make, this</div>
      </div>
      <div className="header_message">
        <div> milestone unforgettable! 🥂🌹</div>
      </div>
      <br></br>
      <br></br>
      <div className="header_message">
        <div>📅 Date: 28/06/2024</div>
      </div>
      <div className="header_message">
        <div>🕰️Time: 7:30 PM onwards</div>
      </div>
      <div className="header_message" style={{ marginBottom: "20px" }}>
        <div>Venue:</div>
      </div>
      <div className="header_message" style={{ flexDirection: "column" }}>
        <div>
          <b>The Real Combo Restaurant</b>
        </div>
        <div>
          <p>Opp. Magneto Mall, Beside Nissan & Datsun</p>
        </div>
        <p>Car Showroom, 36 Mall Service Road</p>
        <p>Raipur Chhatisgarh</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.624218162233!2d81.62783497816197!3d21.243621709813453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd001efe712b%3A0x659c898d2f2112ec!2sThe%20Real%20Combo!5e0!3m2!1sen!2sin!4v1719564101128!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <br></br>
      <br></br>
      <div className="header_message">
        <div>Thank you☺️</div>
      </div>
      <div className="border_image">
        <img src={borderDown} style={{ width: "100%" }} height={"100px"} />
      </div>
      <div className="header_message">
        <div>Developed with ❤️ by Ankit and Shalu</div>
      </div>
    </>
  );
}

export default App;
