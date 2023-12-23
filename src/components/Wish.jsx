import { useState } from "react";
import Confetti from "react-dom-confetti";

const Wish = ({name}) => {
    const [state, setState] =  useState({
        item: "🎁",
        confetti: false,
        hint: "(don't forget to open your present!)"
    });

    const openPresent = () => {
        let presents = [
          "😺",
          "🐶",
          "🎊",
          "🎈",
          "🎉",
          "✨",
          "🎇",
          "🎆",
          "🐇",
          "🦆",
          "🍂",
          "🎂"
        ];
        setState({
          item: presents[Math.floor(Math.random() * Math.floor(presents.length))],
          confetti: true,
          hint: ""
        });
      };
      const config = {
        angle: 90,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        decay: 0.9
      };
    return (
        <>
            <div className="birthdayCard">
                <div className="cardFront">
                <h3 className="happy">HAPPY BIRTHDAY Grogu!</h3>
                <div className="balloons">
                    <div className="balloonOne" />
                    <div className="balloonTwo" />
                    <div className="balloonThree" />
                    <div className="balloonFour" />
                </div>
                </div>
                <div className="cardInside">
                <h3 className="back">HAPPY BIRTHDAY {name}!</h3>
                <p className="btext">Dear Grogu,</p>
                <p className="btext">
                    Happy birthday!! I hope your day is filled with lots of love and
                    laughter! May all of your birthday wishes come true.
                </p>
                <p className="name btext">Shivam</p>
                </div>
            </div>
            <div className="hint">
                {state.hint}
            </div>
            <div className="presentContainer">
                <Confetti active={state.confetti} config={config} />
                <button className="presentButton" onClick={openPresent}>
                    {state.item}
                </button>
            </div>
        </>
      );
}

export default Wish;