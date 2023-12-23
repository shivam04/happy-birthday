const Wish = ({name}) => {
    return (
        <div className="birthdayCard">
            <div className="cardFront">
            <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
            <div className="balloons">
                <div className="balloonOne" />
                <div className="balloonTwo" />
                <div className="balloonThree" />
                <div className="balloonFour" />
            </div>
            </div>
            <div className="cardInside">
            <h3 className="back">HAPPY BIRTHDAY {name}!</h3>
            <p className="btext">Dear Love,</p>
            <p className="btext">
                Happy birthday!! I hope your day is filled with lots of love and
                laughter! May all of your birthday wishes come true.
            </p>
            <p className="name btext">Shivam</p>
            </div>
        </div>
      );
}

export default Wish;