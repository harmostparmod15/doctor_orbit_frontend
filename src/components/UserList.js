import axios from "axios";

import { ADMIN_DELETE_USER_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const UserList = ({ name, mobile_no, email, id, isUserDeleted }) => {
  const user = useSelector((store) => store?.user);

  const handleDeleteUser = async function () {
    try {
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${user?.token}`,
      };
      const response = await axios.delete(`${ADMIN_DELETE_USER_URL}?id=${id}`, {
        headers: headers,
      });

      console.log("delete user axios respo", response);
      alert(` user deleted : ${response?.data?.deleteUserEmail}`);
      isUserDeleted();
    } catch (error) {
      alert("error occured");
      console.log(error);
    }
  };

  // console.log(props);
  return (
    <div className="bg-[#f3f3f3]  text-lg opacit text-slate-600 rounded-md    py-2 flex w-full justify-between">
      <h1 className="w-1/12  px-4">{id}</h1>
      <h1 className="w-3/12  px-4">{name}</h1>
      <h1 className="w-5/12  px-4">{email}</h1>
      <h1 className="w-3/12   px-4">{mobile_no}</h1>
      <button
        onClick={handleDeleteUser}
        className="bg-red-300 text-white px-3 py-1 rounded-md "
      >
        Delete
      </button>
    </div>
  );
};

export default UserList;
