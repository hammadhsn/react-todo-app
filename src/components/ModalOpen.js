import React from "react";
import "../App.css";
import Modal from "react-modal";
const ModalOpen = ({modalIsOpen, setModalIsOpen ,closeModal, sure, setSure}) => {

    return (
        <>
        <div className="modal size-control">
            

        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        
        overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before"
        }}
        className={{
            base: "content-base",
            afterOpen: "content-after  size-control",
            beforeClose: "content-before  "
        }}
        closeTimeoutMS={500}
        
        >
            <div className="modal-text">
                <h3 >Are you sure?</h3>

            </div>

        <div className="modal-btn-div">
        
        <button  className="modal-btn1" onClick={closeModal}>No</button>

        <button  className="modal-btn2" onClick={()=>setSure(true)}>Yes</button>

        </div>


        </Modal>
        
        </div>

        </>
    );
};

export default ModalOpen;
