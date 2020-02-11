import React, { useState, useEffect } from "react";
import { fetchStoriesData } from "../../actions/fetchStories";
import { useSelector, useDispatch } from "react-redux";
import Story from "./Story";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { api } from "../../utils/api";
import FormGroup from "@material-ui/core/FormGroup";
import { TextareaAutosize, TextField, Button } from "@material-ui/core";
import { H2 } from "../layout/home/Home";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;
const StoriesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
`;
const StoryList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [storyToEdit, setStoryToEdit] = useState({
    title: "",
    contents: ""
  });

  useEffect(() => {
    dispatch(fetchStoriesData());
  }, []);

  const editStory = story => {
    setEditing(true);
    setStoryToEdit(story);
  };

  const saveEdit = e => {
    e.preventDefault();
    api()
      .put(`/stories/${storyToEdit.id}`, storyToEdit)
      .then(res => {
        setEditing(false);
        dispatch(
          fetchStoriesData(
            state.stories.map(item =>
              item.id === res.data.id ? res.data : item
            )
          )
        );
      })
      .catch(err => console.log("Put err", err.response));
  };

  const deleteStory = story => {
    api()
      .delete(`stories/${story.id}`)
      .then(res => {
        console.log("Del res", res);
        dispatch(fetchStoriesData());
        setEditing(false);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <MainDiv>
      <H2>Stories to tell</H2>
      <StoriesDiv>
        {state.stories.map(story => {
          return (
            <Story
              story={story}
              key={story.id}
              editStory={editStory}
              deleteStory={deleteStory}
            />
          );
        })}
      </StoriesDiv>

      {editing && (
        <FormGroup onSubmit={saveEdit}>
          <div>
            <TextField
              name="title"
              value={storyToEdit.title}
              onChange={e =>
                setStoryToEdit({ ...storyToEdit, title: e.target.value })
              }
            />
            <label>
              <TextareaAutosize
                style={{ width: "90%" }}
                value={storyToEdit.contents}
                onChange={e =>
                  setStoryToEdit({
                    ...storyToEdit,
                    contents: e.target.value
                  })
                }
              />
            </label>
            <Button variant="contained" color="primary" type="submit">
              Update Story
            </Button>
            <span style={{ margin: "10px" }}></span>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setEditing(false)}
            >
              cancel
            </Button>
          </div>
        </FormGroup>
      )}
    </MainDiv>
  );
};

export default StoryList;
