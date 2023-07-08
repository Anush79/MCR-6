import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";
import { useData } from "../context/dataContext";
export default function AddReview({ restId ,closefunction}) {
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
    <div className='bg-rose-500 flex flex-col p-3  border-white border-2'>
      <span className='' onClick={closefunction}>
         <CloseIcon/>
      </span>
    <h2 className='text-white font-bold text-2xl border-b my-4 text-center'>Add Your review</h2>
      <form className=' flex flex-col justify-center items-center gap-3'>
        <div className='flex justify-between w-full'>
          <label htmlFor="rating"> Select Rating</label>
        <select name="rating" onChange={onChangeHandler} required id="rating">
          <option value="">Select Rating</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
        </select>

        </div>
        
        <div className='flex gap-4'>
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
        className='bg-white text-black p-2 px-4 rounded font-bold'
          onClick={(e) => {
            AddReviewFunction(e, formData, restId);
            closefunction()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
