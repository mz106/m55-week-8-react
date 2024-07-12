import { useContext } from "react";

import { AdminContext } from "../../providers/adminProvider/AdminProvider";

const AdminContainer = () => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <div>
      {isAdmin ? (
        <p>Do your admin thing!!!</p>
      ) : (
        <p>You are no admin of mine!!!</p>
      )}
    </div>
  );
};

export default AdminContainer;
