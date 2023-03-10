import "./Landing.css";
import { useState } from "react";
import CircularList from "./CircularList";

import Rating from "@mui/material/Rating";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import data from "./data"

const Landing = () => {
  const [rotateLeft, setRotateLeft] = useState(false);
  const [rotateRight, setRotateRight] = useState(false);
  const [personIdx, setPersonIdx] = useState(2);

  const spinLeft = () => {
    setRotateLeft(true);
    if (personIdx === 0){
      setPersonIdx(4);
    }
    else setPersonIdx(personIdx-1);
  };

  const spinRight = () => {
    setRotateRight(true);
    if (personIdx === 4){
      setPersonIdx(0);
    }
    else setPersonIdx(personIdx+1);  };

  return (
    <div className="container">
      <div className="spin-container">
        <CircularList
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
          handleRotateLeft={setRotateLeft}
          handleRotateRight={setRotateRight}
        />
      </div>

      <div className="up-button" onClick={spinLeft} style={{ color: "white" }}>
        <ArrowDownwardIcon />
      </div>
      <div
        className="down-button"
        onClick={spinRight}
        style={{ color: "white" }}
      >
        <ArrowUpwardIcon />
      </div>

      <div>
      {
        (data[personIdx].rating === 5)?
          <div className="rating-number">{data[personIdx].rating}.0</div>
          :
          <div className="rating-number">{data[personIdx].rating}</div>
      }
      </div>

      <div
        className="rating-stars"
      >
      <Rating
        value={data[personIdx].rating}
        sx={{ fontSize: 40 }}
        readOnly
      />
      </div>

      <div className="person-name">{data[personIdx].name}</div>
      <div className="person-role">{data[personIdx].job}</div>

      <div className="description">{data[personIdx].description}</div>
      <div className="session-button">Book a Session</div>
      <div className="name-button" key={data[personIdx].name}>{data[personIdx].name}</div>

    </div>
  );
};

export default Landing;
