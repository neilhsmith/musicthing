import { useState, useEffect } from "react";
import api from "utils/api";

import { IUser } from "features/auth/auth.types";

const LibraryView = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    (async () => {
      const users = await api.get<Array<IUser>>("users");
      setUsers(users);
    })();
  }, []);

  return (
    <div>
      library view
      <br />
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryView;
