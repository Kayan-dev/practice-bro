import React, { useState } from "react";
import StoryForm from "./StoryForm";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectUserStories, selectUser } from "../../store/user/selectors";
import { deleteStory } from "../../store/user/actions";
import Homepage from "../../components/Homepage";
import StoryCarousel from "../../components/StoryCarousel";
import MyHomepageForm from "./MyHomepageForm";
import { useSelector, useDispatch } from "react-redux";

export default function MyPage() {
  const { token, homepage, id } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(detailPages);
  //   }, []);

  const stories = useSelector(selectUserStories);
  console.log("details", stories);

  const displayButtons =
    id === homepage.userId && editMode === false && postStoryMode === false;

  //Buffer render time
  if (!stories) return <div>Loading...</div>;

  return (
    <>
      <div>
        <Homepage
          id={homepage.id}
          title={homepage.title}
          description={homepage.description}
          backgroundColor={homepage.backgroundColor}
          color={homepage.color}
          showLink={false}
        />
      </div>

      <Container>
        {displayButtons ? (
          <Card>
            <Button onClick={() => setEditMode(true)}>Edit my page</Button>
            <Button onClick={() => setpostStoryMode(true)} className="mt-2">
              Post a cool story bro
            </Button>
          </Card>
        ) : null}

        {editMode ? (
          <Card>
            <MyHomepageForm />
          </Card>
        ) : null}

        {postStoryMode ? (
          <Card>
            pm ru
            <StoryForm />
          </Card>
        ) : null}

        <StoryCarousel homepage={homepage} />
      </Container>

      {/* {stories.map((page, index) => {
        return (
          <div
            style={{
              backgroundColor: page.color,
              color: page.backgroundColor,
            }}
            key={page.id}
          >
            <h4>{page.name}</h4>
            <br></br>
            <p>{page.content}</p>
            <img alt={page.name} src={page.imageUrl}></img>

            <button
              onClick={() => {
                dispatch(deleteStory(page.id));
                console.log("Hello");
              }}
              type="submit"
            >
              Delete Story
            </button>
          </div>
        );
      })} */}
    </>
  );
}
