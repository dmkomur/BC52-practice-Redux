// import { addUserAC } from 'Redux/users/userActions';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addUser } from 'Redux/users/userSlice';

export const AddPage = () => {
  const dispatch = useDispatch();
  const submitHandle = e => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name: e.target.elements.name.value,
      age: e.target.elements.age.value,
    };
    dispatch(addUser(newUser));
    e.target.reset();
  };
  return (
    <form onSubmit={submitHandle}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Age
        <input type="number" name="age" />
      </label>
      <button>Add</button>
    </form>
  );
};
