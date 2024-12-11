import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
});

const DSACard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://leetcode-stats-api.herokuapp.com/PranavBhatP');
                if (!response.ok) {
                    console.error('API response not OK:', response.status);
                    return;
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <p className='text-center font-semibold' style={{ fontSize: '18px', color: "#D4D4D4" }}>Loading...</p>;
    }

    const { easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard } = data;

    return (
        <>
            <h3 className={kanit.className} style={{ fontSize: '18px', color: "#D4D4D4" }}>LeetCode Profile</h3>
            <div className="flex flex-wrap gap-6">
                <section className="p-8 hover:scale-105 hover:duration-500 w-60 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                    <h4 className="text-lg text-center font-semibold" style={{ color: "#29BABA" }}>Easy</h4>
                    <CircularProgressbar
                        value={easySolved}
                        text={`${easySolved}/${totalEasy}`}
                        strokeWidth={5}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#29BABA`,
                            textColor: '#29BABA',
                            trailColor: 'grey',
                            backgroundColor: '#3e98c7',
                        })}
                    />
                </section>
                <section className="p-8 hover:scale-105 hover:duration-500 w-60 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                    <h4 className="text-lg text-center font-semibold" style={{ color: "#FFB700" }}>Medium</h4>
                    <CircularProgressbar
                        value={mediumSolved}
                        text={`${mediumSolved}/${totalMedium}`}
                        strokeWidth={5}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#FFB700`,
                            textColor: '#FFB700',
                            trailColor: 'grey',
                            backgroundColor: '#3e98c7',
                        })}
                    />
                </section>
                <section className="p-8 hover:scale-105 hover:duration-500 w-60 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                    <h4 className="text-lg text-center font-semibold" style={{ color: "#F63737" }}>Hard</h4>
                    <CircularProgressbar
                        value={hardSolved}
                        text={`${hardSolved}/${totalHard}`}
                        strokeWidth={5}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#F63737`,
                            textColor: '#F63737',
                            trailColor: 'grey',
                            backgroundColor: '#3e98c7',
                        })}
                    />
                </section>
            </div>
        </>
    );
};

export default DSACard;
