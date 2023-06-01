import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to="/">Users</NavItem>
        </li>
        <li>
          <NavItem to="add">Add</NavItem>
        </li>
      </ul>
    </nav>
  );
};
