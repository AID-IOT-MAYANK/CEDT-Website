import React, { useState } from 'react'
import './TimeLine.css'
import timelineElements from './TimeLineEvents';

import WorkIcon from "./work.svg"
import SchoolIcon from "./school.svg"
import PlusIcon from "./plus.svg"
import MinusIcon from "./minus.svg"
// import { SchoolIcon } from "../../../static/img/school.svg";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {

    const [value , setValue] = useState(4);

    const handlePlusIcon = () => {
        setValue(value + 4);
    }

    const handleMinusIcon = () => {
        setValue(4);
    }

    return (
        <div>

            <VerticalTimeline
                animate={true}
                lineColor='grey'
            >
                {timelineElements.map((timeLineEvent) => {

                    if(timeLineEvent.id > value) return null;

                    return (
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work'
                            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={timeLineEvent.icon === 'college' 
                            ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                            : { borderRight: '7px solid  rgb(233, 30, 99)' }
                            }
                            date={timeLineEvent.date}
                            iconStyle={timeLineEvent.icon === 'college' 
                            ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                            : { background: 'rgb(233, 30, 99)', color: '#fff' }
                            }
                            icon={timeLineEvent.icon === 'college' ? <WorkIcon /> : <SchoolIcon />}

                        >
                            <h3 className="vertical-timeline-element-title">{timeLineEvent.venue}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{timeLineEvent.audience}</h4>
                            <p>{timeLineEvent.event}</p>

                        </VerticalTimelineElement>
                    )
                })}

                {value < timelineElements.length && <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<PlusIcon />}
                    iconOnClick={handlePlusIcon}
                />}
                {value > 4 && <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<MinusIcon />}
                    iconOnClick={handleMinusIcon}
                />}

            </VerticalTimeline>

        </div>
    )
}

export default TimeLine