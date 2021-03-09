import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuestions } from "../actions/shared";

const Home = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  console.log(questions);

  return (
    <div>
      {questions &&
        questions.map((quest) => <div key={quest.id}>{quest.author}</div>)}
    </div>
  );
};

export default Home;
