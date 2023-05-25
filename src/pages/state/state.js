import { useState } from 'react';

function Button({ handleClick, text, disable }) {
  return (
    <button onClick={handleClick} disabled={disable}>
      {text}
    </button>
  );
}

export const State = ({ sculptureList }) => {
  const [index, setIndex] = useState(0);
  const displayData = sculptureList[index];

  const handleClickNext = () => {
    setIndex(index + 1);
  };
  const handleClickBack = () => {
    setIndex(index - 1);
  };

  const { length, last = length - 1 } = sculptureList;
  return (
    <section>
      <Button handleClick={handleClickBack} text="Prev" disable={index === 0} />
      <Button
        handleClick={handleClickNext}
        text="Next"
        disable={last === index}
      />
      <h3>{displayData.name}</h3> By {displayData.artist}
      <h4>
        {index + 1} of {sculptureList.length}
      </h4>
      <img src={displayData.url} alt={displayData.alt} />
      <p>{displayData.description} </p>
    </section>
  );
};

export default Button;
