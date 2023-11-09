function NextButton({ dispatch, quizFinished }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: quizFinished ? "finishQuiz" : "nextQuestion" })
      }
    >
      {quizFinished ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
