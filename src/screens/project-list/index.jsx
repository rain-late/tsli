import { useEffect, useState } from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import {cleanObj} from 'utils.js'
import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(param))}`).then(async (rs) => {
      if (rs.ok) {
        setList(await rs.json());
      }
    });
  }, [param]);
  useEffect(()=> {
    fetch(`${apiUrl}/users?`).then(async (rs) => {
      if (rs.ok) {
        setUsers(await rs.json());
      }
    });
  }, [])
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
