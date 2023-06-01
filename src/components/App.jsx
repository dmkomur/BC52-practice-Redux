import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { UsersPage } from 'Pages/UsersPage';
import { AddPage } from 'Pages/AddPage';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="add" element={<AddPage />} />
        </Route>
      </Routes>
    </div>
  );
};
