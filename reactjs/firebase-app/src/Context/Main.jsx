import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, onValue } from "firebase/database";
const MainContext = createContext();

const Main = (props) => {
    const notify = (msg) => toast(msg);
    const db = getDatabase();
    const [data, setData] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [user, setUser] = useState(null);
    const [current, setCurrent] = useState(0);
    const [result, setResult] = useState(null);

    const loginUser = (data) => {
        localStorage.setItem("user", JSON.stringify(data)); // stored into ls
        setUser(data);
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    const selAnswer = (index, ans) => {
        let flag = false; // vo answer phele se nhi pada hai
        for (let u_ans of userAnswer) {
            if (u_ans.index == index) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            setUserAnswer(
                [
                    ...userAnswer,
                    {
                        index, ans
                    }
                ]
            )
        } else {
            const newAns = userAnswer.map(
                (u_ans) => {
                    if (u_ans.index == index) {
                        return {
                            index,
                            ans // update the answer
                        }
                    } else {
                        return u_ans
                    }
                }
            )
            setUserAnswer(newAns)
        }
    }

    useEffect(
        () => {
            if (userAnswer.length != 0)
                localStorage.setItem("user_answer", JSON.stringify(userAnswer));
        },
        [userAnswer]
    )

    useEffect(
        () => {
            if (current != 0) localStorage.setItem("current", current);
        },
        // first render and change of current state
        [current]
    )



    useEffect(
        () => {
            const lsUser = localStorage.getItem("user");
            const lsUserAns = localStorage.getItem("user_answer");
            const lsCurrent = localStorage.getItem("current");
            if (lsUser != undefined) {
                setUser(JSON.parse(lsUser)); // retrived from ls
            }
            if (lsUserAns != null) {
                setUserAnswer(JSON.parse(lsUserAns))
            }
            if (lsCurrent != null) {
                setCurrent(lsCurrent);
            }
        },
        []
    )


    const next = () => {
        setCurrent(parseInt(current) + 1);
    }
    const prev = () => {
        if (current == 1) {
            localStorage.setItem("current", 0);
        }
        setCurrent(parseInt(current) - 1);
    }

    const finish = () => {
        console.log(userAnswer);
        console.log(data);
        let marks = 0;
        let neg = 0;
        data.forEach(
            (d, i) => {
                for (let u_ans of userAnswer) {
                    if (i == u_ans.index) {
                        if (d.answer == u_ans.ans) {
                            marks += 2;
                        } else {
                            neg += 0.25;
                        }
                        break;
                    }
                }
            }
        )
        setResult(
            {
                neg,
                marks
            }
        )
    }

    useEffect(
        () => {
            const starCountRef = ref(db, 'quiz');
            onValue(starCountRef, (snapshot) => {
                const quizData = snapshot.val();
                //console.log(quizData); // object of objects
                const arr = Object.keys(quizData).map(
                    (k) => {
                        return {
                            id: k,
                            ...quizData[k]
                        }
                    }
                )
                //console.log(arr);
                setData(arr);
            });
        },
        []
    )
    function playAgain() {
        setUserAnswer([]);
        setCurrent(0);
        setResult(null);
        localStorage.removeItem("user_answer");
        localStorage.removeItem("current");
    }
    return (
        <MainContext.Provider value={{ playAgain, result, finish, selAnswer, userAnswer, notify, data, user, loginUser, logout, current, next, prev }}>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }
