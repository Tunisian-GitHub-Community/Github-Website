import React from 'react';
import TimeAgo from 'react-timeago';

import useGetTimeline from '../hooks/db/useGetTimeline';

import Spinner from '../components/Spinner';

function TimeLinePage() {
  const { data = { events: [] }, isLoading } = useGetTimeline();

  if (isLoading) return <Spinner />;

  let timelineData = [...data.events];
  let style;
  return (
    <div className="container mb-3 mx-auto ">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }}
        ></div>
        {timelineData.reverse().map((event, i) => {
          style =
            i % 2 === 0
              ? 'mb-8 flex justify-between items-center w-full right-timeline'
              : 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline';
          return (
            <div className={style} key={i}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {timelineData.length - i}
                </h1>
              </div>
              <div className="order-1 bg-gray-300 transform hover:scale-105	motion-reduce:transform-none rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className=" font-bold text-gray-800 text-xl">
                  {event.title}
                </h3>
                <h5 className="font-bold text-gray-800 text-sm">
                  {event.subTitle}
                </h5>
                <h6 className="mb-3 font-bold text-gray-400 text-xs">
                  <TimeAgo date={event.date} />
                </h6>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLinePage;
