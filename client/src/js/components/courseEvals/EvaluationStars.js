import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const FilledStar = styled(FontAwesomeIcon)`
  color: orange;
`;

const BlankStar = styled(FontAwesomeIcon)`
  color: #ccc;
`;

const displayFilledStars = scale => {
  let stars = [];
  for (let n = Math.floor(scale); n > 0; n--) {
    stars.push(<FilledStar key={n} icon={faStar} />);
  }
  return stars;
  // return [...Array(Math.floor(scale)).keys()].map(i => {
  //   return <FilledStar key={i} icon={faStar} />
  // })
}

const displayHalfStar = scale => {
  return (scale - Math.floor(scale))*2 ? <FilledStar icon={faStarHalf} /> : ''
}

const displayBlankStars = scale => {
  let stars = [];
  for (let n = 5-Math.ceil(scale); n > 0; n--) {
    stars.push(<BlankStar key={n} icon={faStar} />);
  }
  return stars;
  // return [...Array(5-Math.ceil(scale)).keys()].map(i => <BlankStar key={i} icon={faStar} />)
}

const EvaluationStars = ({ scale }) => (
  <span>
    {displayFilledStars(scale)}
    {displayHalfStar(scale)}
    {displayBlankStars(scale)}
  </span>
)

export default EvaluationStars;