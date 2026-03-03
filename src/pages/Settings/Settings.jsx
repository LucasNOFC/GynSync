import React, { useState } from "react";
import UserTable from "../UserTable/UserTable";
import TotalUser from "../UserTable/TotalUser";
import TotalAdmins from "../UserTable/TotalAdmins";

const Settings = () => {
  const [users, setUsers] = useState(0);
  const [admin, setAdmins] = useState(0);


  return (
    <div className="m-auto">
      <div className="flex flex-col">
        <div className="ml-5 flex gap-5 items-center">
          <TotalUser usersNumber={users} key={'user'} />
          <TotalAdmins adminNumber={admin} key={'admin'}/>
        </div>
        <UserTable getUsers = {setUsers} getAdmins = {setAdmins}/>
      </div>
    </div>
  );
};

export default Settings;
