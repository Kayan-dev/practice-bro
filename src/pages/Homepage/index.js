import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { homePages } from "../../store/home/actions";
import { selectAllHomePages } from "../../store/home/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  console.log("Hello");
  useEffect(() => {
    console.log("useeffect");
    dispatch(homePages);
  }, []);

  const postPages = useSelector(selectAllHomePages);
  console.log("PAGES", postPages);
  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <h1>TESTING HOME PAGE</h1>
      <div>
        <h2>{postPages}</h2>
      </div>
    </div>
  );
}
