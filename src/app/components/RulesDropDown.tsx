/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const RulesDropDown = ({ title, subtitles }) => (
  <details data-test="RulesDropDown" className="w-5/12 m-4">
    <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
      {title}
    </summary>
    <span className="py-4">
      <ul>
        {subtitles.map((subtitle, i) =>
          subtitles.length > 1 ? (
            <li key={i} className="py-2">
              {subtitle}
            </li>
          ) : (
            <div className="py-4">{subtitle} </div>
          ),
        )}
      </ul>
    </span>
  </details>
);

RulesDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default RulesDropDown;
