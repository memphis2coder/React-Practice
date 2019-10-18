import React from "react";

function Jokes(props) {
  return (
    <div className="joker">
      <h3 style={{ display: props.joke ? "block" : "none" }}>
        Joker: {props.joke}
      </h3>
      <h3 style={{ color: !props.joke && "blue" }}>
        Punchline: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Jokes;
