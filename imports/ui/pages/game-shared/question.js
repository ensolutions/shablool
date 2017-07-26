import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../../components/answers';
import GameNavbar from '../../components/game-navbar';
import CountdownTimer from '../../components/count-down-timer';
import Image from '../../../api/images/images';

const Question = ({ game }) => {
  const question = game.lastQuestionToStart();
  const questionImage = Image.findOne({ _id: question.image });

  const skipQuestion = () => {
    game.applyMethod('skipQuestion', [question._id]);
  };

  return (
    <div id="question">
      <div className="question-background" />
      <div className="row">
        <GameNavbar text={question.text} num="" />
      </div>
      {game.quiz.owner === Meteor.userId()
        ? <a href="javascript:void(0)" className="btn btn-primary show-leaders-btn" onClick={skipQuestion}>
            עבור שאלה
          </a>
        : ''}
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 padding-top">
          <CountdownTimer secondsRemaining={game.getQuestionTimeLeft(question._id)} />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <img className="question-image" src={question.image === 'no-image' ? '/img/default.png' : questionImage.link()} alt="defaultImg" />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 padding-top">
          <p className="answer-count" id="answer-count-number">
            {game.answerCount()}
          </p>
          <p className="answer-count">תשובות</p>
        </div>
      </div>
      <Answers answers={question.answers} game={game} />
    </div>
  );
};

Question.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default Question;
