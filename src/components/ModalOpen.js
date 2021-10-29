import React from "react";
import "../App.css";
import Modal from "react-modal";
const ModalOpen = ({modalIsOpen, setModalIsOpen ,clearItems, sure, setSure}) => {

    const nohandler = () =>{
        clearItems(); setSure(false);
    };
    const yeshandler =() =>{
        clearItems(); setSure(true);
    }
    return (
        <>
        <div className="modal">

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
            afterOpen: "content-after",
            beforeClose: "content-before"
        }}
        closeTimeoutMS={500}
        >
        <button onClick={nohandler}>No</button>

        <button onClick={yeshandler}>Yes</button>


        </Modal>
        
        </div>

        </>
    );
};

export default ModalOpen;
