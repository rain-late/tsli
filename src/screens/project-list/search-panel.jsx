export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form>
      <input
        type='text'
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      ></input>
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        <option value={''}>负责人</option>
        {users.map((i) => (
          <option value={i.id}>{users.name}</option>
        ))}
      </select>
    </form>
  );
};
