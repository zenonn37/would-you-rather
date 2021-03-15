import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuestions } from "../actions/shared";

const Home = () => {
  const dispatch = useDispatch();

  const { questions, answered, unanswered } = useSelector(
    (state) => state.questions
  );

  const [status, setStatus] = useState(true);

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  const statusHandler = () => {
    setStatus((status = !status));
  };

  return (
    <div>
      <button onClick={() => setStatus(true)}>Unanswered</button>
      <button onClick={() => setStatus(false)}>Answered</button>

      {!status ? (
        <div className="answered">
          {answered &&
            answered.map((quest) => (
              <div key={quest.id}>
                <div>{quest.author}</div>
                <h1>Would you rather</h1>
                <p>{quest.optionOne.text}</p>
              </div>
            ))}
        </div>
      ) : (
        <div className="unanswered">
          {unanswered &&
            unanswered.map((quest) => (
              <div key={quest.id}>
                <div>{quest.author}</div>
                <h1>Would you rather</h1>
                <p>{quest.optionOne.text}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
