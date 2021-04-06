import React from 'react';

const cardsData = [
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8 text-gray-400 dark:text-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </svg>
    ),
    title: 'Weekly Talks',
    text:
      'We host weekly talks on our Discord Server. Debate all kinds of subjects related to the IT industry and software development, also having a special guest for every meeting, providing the chance for students to share their knowledge and hopefully answer all their questions.',
    link: 'https://discord.gg/MzXu6mM5eN',
    LinkTitle: 'Our Discord Server',
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        className="w-8 h-8 text-gray-400 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </svg>
    ),
    title: 'Monthly Challenges',
    text:
      'We organize monthly challenges that are open to all Students across Tunisia, with the goal of encouraging students to expand their knowledge and improve their technical skills.',
    link: 'https://github.com/Tunisian-GitHub-Community',
    LinkTitle: 'Our Discord Server',
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        viewBox="0 0 24 24"
        className="w-8 h-8 text-gray-400 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </svg>
    ),
    title: 'Mentoring',
    text:
      "We've all been there! lost, confused, and burned-out. Some of us suffered from impostor syndrome. That's why we provide guidance and mentoring to our Community members on a daily basis.",
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8 text-gray-400 dark:text-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </svg>
    ),
    title: 'Pair Programming',
    text:
      "Programming is a team sport, that's why we highly encourage pair programming and advise students to work together on monthly challenges to achieve more and improve on their Soft Skills.",
    link: 'https://github.com/Tunisian-GitHub-Community/Challenge-Ideas',
    LinkTitle: 'Challenge Ideas',
  },
];
export default cardsData;
