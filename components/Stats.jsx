'use client'

import CountUp from "react-countup";
const stats = [
    {
        num: 3,
        text: "Years of experience"
    },
    {
        num: 20,
        text: "Projects completed"
    },
    {
        num: 10,
        text: "Technologies used"
    },
    {
        num: 100,
        text: "Code commits"
    }
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw]  mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp end={stat.num} duration={3} delay={1} className="text-4xl xl:text-6xl font-extrabold" />
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/60`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;
