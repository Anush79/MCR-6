import { useState } from "react";
import { useData } from "../context/dataContext";
export default function AddReview({restId}) {
  const { AddReviewFunction, loggedInUserData } = useData();
  const [formData, setFormData] = useState({
    revName: loggedInUserData?.userName,
    pp: loggedInUserData?.profileAvatar,
    rating: null,
    comment: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div>
      <form>
        <label htmlFor="rating"> Select Rating</label>
        <select name="rating" onChange={onChangeHandler} required id="rating">
          <option value="">Select Rating</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
        </select>
        <div>
          <label htmlFor="addreview">Add Review</label>
          <textarea
            name="comment"
            id="addReview"
            cols="20"
            rows="5"
            required
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            AddReviewFunction(e, formData,restId );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
