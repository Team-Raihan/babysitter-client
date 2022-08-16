import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [role, setAdmin] = useState("");
  const [roleLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/user/verify-role/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.role);
          setAdminLoading(false);
        });
    }
  }, [email]);

  return [role, roleLoading];
};

export default useAdmin;
