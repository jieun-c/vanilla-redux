import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators } from "../store/store";

const Detail = ({ toDos, onBtnClick }) => {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const navigate = useNavigate();

  const handleDel = () => {
    onBtnClick(id);
    navigate("/");
  };

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={handleDel}>DEL</button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
