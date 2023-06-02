import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'Redux/users/userSelectors';
// import { delUserAC } from 'Redux/users/userActions';
import { deleteUser } from 'Redux/users/userSlice';

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}{' '}
            <button type="button" onClick={() => dispatch(deleteUser(user.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
