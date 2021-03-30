export const isRecommended = ({ vote_average }) => vote_average >= 7.5;

export const isNotRecommended = ({ vote_average }) => vote_average < 6;
