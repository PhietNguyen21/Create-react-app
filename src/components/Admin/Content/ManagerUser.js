import ModalCreateUser from "./ModalCreateUser";

const ManagerUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <button>Add new users</button>
        <div>
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
