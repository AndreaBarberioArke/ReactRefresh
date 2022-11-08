import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


export interface MyTodoParams {
  text: string;
}
export const Todo: React.FC<MyTodoParams> = (props) => {
   const [showModal, setShowModal ] = useState(false);
    
    
  const deleteHandler = () => {
 setShowModal(true)
  };
    
  const closeModal = () => {
 setShowModal(false)
  };
  return (
    <div className="card">
      <h1>My Todos</h1>
      <div>
        <div className="actions">
          <h3>{props.text}</h3>
          <div className="actionsBtn"> 
            <button className="btn" onClick={deleteHandler}>
              Delete
            </button>
            {showModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
            {showModal && <Backdrop onDelete={closeModal}/> }
  
        
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
