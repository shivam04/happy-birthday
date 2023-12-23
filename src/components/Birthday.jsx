import { useState, useEffect } from "react";
import CountDown from "./CountDown";

const Birthday = () => {
    const name = "Prags";
    const birthday = 30;
    const birtmonth = 12;

    const [birthdayState, setBirthdayState] = useState({
        seconds: 0,
        hours: 0,
        minutes: 0,
        days: 0,
        isItBday: false
    });

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    const isItBday = currentTime.getDate() === birthday && currentTime.getMonth === birtmonth -1;

    useEffect(() => {
        setInterval(() => {
            const countDown = () => {
                const dateCurrent = new Date();
                let birthdayDay = new Date(currentYear, birtmonth - 1, birthday);

                if (dateCurrent > birthdayDay) {
                    birthdayDay = new Date(currentYear+1, birtmonth-1, birthday);
                } else if(dateCurrent.getFullYear() === birthdayDay.getFullYear() + 1) {
                    birthdayDay = new Date(currentYear, birtmonth - 1, birthday);
                }

                const currentTime = dateCurrent.getTime();
                const birthdayTime = birthdayDay.getTime();

                const timeRemaining = birthdayTime - currentTime;

                let seconds = Math.floor(timeRemaining / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                seconds %= 60;
                minutes %= 60;
                hours %= 24;

                setBirthdayState((prevState) => ({
                    ...prevState,
                    seconds,
                    minutes,
                    hours,
                    days,
                    isItBday,
                }));
            };

            if (!isItBday) {
                countDown();
            } else {
                setBirthdayState((prevState) => ({
                    ...prevState,
                    isItBday: true,
                }));
            }
        }, 1000);
    }, [currentYear, birthday, isItBday, birtmonth]);

    let birth = new Date(currentYear, birtmonth - 1, birthday);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    
    let monthBday = monthNames[birth.getMonth()];
    return (
        <div className="page">
            <CountDown countdownData={birthdayState} name={name} />
            {!isItBday && (
                <>
                    <div className="birthdate">
                        Birth-Date: {birthday} {monthBday} {currentYear}
                    </div>
                </>
            )}
        </div>
    );
}

export default Birthday;