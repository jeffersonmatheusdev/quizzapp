import Score from '../components/Score';
import shuffle from '../function/shuffle';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { questionptBR } from '../data/questionptbr';
import QuizzComponent from '../components/QuizzComponent';

export default function Home() {

  const [data, setData] = useState({
    answer: shuffle(questionptBR),
    active_answer: null,
    opt_selected: null,
    score: 0,
    last_quiz: false
  });

  useEffect(() => {
    setData(
      {
        ...data, active_answer: data.answer.shift()
      }
    );
  }, []);

  if (data.active_answer !== null) {

    if (data.answer !== [] && data.active_answer !== undefined) {
      return (
        <QuizzComponent
          answer={data.active_answer.question}
          option_1={data.active_answer.opt1}
          option_2={data.active_answer.opt2}
          option_3={data.active_answer.opt3}
          option_4={data.active_answer.opt4}
          set_option_selected={
            (e) => {
              setData({ ...data, opt_selected: e.target.value })
            }
          }
          onClickButton={
            () => {
              if (data.opt_selected === data.active_answer.correctly_opt) {
                setData({
                  ...data, score: data.score++
                });
              };
              setData({
                ...data, active_answer: data.answer.shift()
              });
            }}
          controlSelected={
            data.opt_selected
          }
        />
      );
    }

    else {
      return (
        <Score
          score={data.score}
        />
      )
    }

  }

  else {
    return (
      <Loading />
    )
  }

}