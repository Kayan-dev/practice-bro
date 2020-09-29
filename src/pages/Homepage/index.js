import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { homePages } from "../../store/home/actions";
import { selectAllHomePages } from "../../store/home/selectors";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  console.log("Hello");
  useEffect(() => {
    console.log("useeffect");
    dispatch(homePages);
  }, []);

  const postPages = useSelector(selectAllHomePages);
  console.log("PAGES", postPages);

  //Buffer render time
  if (!postPages) return <div>Loading...</div>;

  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <h1>TESTING HOME PAGE</h1>
      {postPages.map((page, index) => {
        return (
          <div
            style={{
              backgroundColor: page.color,
              color: page.backgroundColor,
            }}
            key={page.id}
          >
            <h4>{page.title}</h4>
            <br></br>
            <p>{page.description}</p>
            <Link to={`homepages/${page.userId}`}>
              <button type="submit">Visit Page!</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
