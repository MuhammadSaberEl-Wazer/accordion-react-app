// import React, { useState } from 'react';
// import data from './data';
// import SingleQuestion from './Question';
// function App() {
//   const [questions,setQuestions] = useState(data);
//   return <main className='container'>
//     <h3>Question and Answers about Login</h3>
//     <section className='info'>
//       {
//         questions.map((question) => {
//           return <SingleQuestion key={question.id} {...question} />

//         })
//       }
//     </section>
//   </main>;
// }

// export default App;

import React, { useState } from "react";
import Data from "./data.js";
import SingleQuestion from "./Question.js";

const App = () => {
  const [questions, setQuestion] = useState(Data);

  return (
    <main className="container">
      <h3>Question and Answers about Login</h3>
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
};

export default App;
