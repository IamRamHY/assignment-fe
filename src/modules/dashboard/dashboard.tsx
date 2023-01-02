import { useState, useCallback, useEffect } from "react";
import Header from "../../components/header/header";
import { getUsers } from "../../apis";
import ProfileCard from "../../components/profile-card/profile-card";
import Button from "../../components/button/button";
import { iUser } from "../../types";
import "./dashboard.scss";

function Dashboard(): JSX.Element {
  const [users, setUsers] = useState<Array<iUser>>([]);

  const getUsersList = useCallback(
    async (skip?: number) => {
      const response = await getUsers(skip || 0);
      setUsers([...users, ...response]);
    },
    [users]
  );

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <main className="dashboard">
      <Header />

      <section className="userProfileGrid">
        {users.map((user) => (
          <ProfileCard data={user} />
        ))}
      </section>
      <Button
        btnName="Click here to load 10 more"
        onClick={() => getUsersList(users.length)}
      />
    </main>
  );
}

export default Dashboard;
