import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

const Comment = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 1em;
  margin-bottom: 1em
`;

const CommentText = styled("div")`
  flex: 1;
`;

const CommentEvaluationWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2em;
`;

const CommentEvaluation = styled("div")`
  flex: 1;
`;

const CommentEvaluationStars = styled("span")`
  color: orange;
`;

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => {
    let satisfaction = parseInt(comment["satisfaction"]);
    let difficulty = parseInt(comment["difficulty"]);
    let benefit = parseInt(comment["benefit"]);
    return (
      <Comment key={i}>
        <CommentText>
          {comment["comment"]}
        </CommentText>
        <CommentEvaluationWrapper>
          <CommentEvaluation>
            Satisfaction:{' '}
            <CommentEvaluationStars>
              {"★".repeat(satisfaction) + "☆".repeat(5-satisfaction)}
            </CommentEvaluationStars>
          </CommentEvaluation>
          <CommentEvaluation>
            Difficulty:{' '}
            <CommentEvaluationStars>
              {"★".repeat(difficulty) + "☆".repeat(5-difficulty)}
            </CommentEvaluationStars>
          </CommentEvaluation>
          <CommentEvaluation>
            Benefit:{' '}
            <CommentEvaluationStars>
              {"★".repeat(benefit) + "☆".repeat(5-benefit)}
            </CommentEvaluationStars>
          </CommentEvaluation>
        </CommentEvaluationWrapper>
      </Comment>
    )
  });
}

export default CommentsList;
