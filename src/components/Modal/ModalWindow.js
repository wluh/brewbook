import React from "react";
import Modal from "react-modal";

function ModalWindow(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
        <button onClick={openModal}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <div className="modalContent">
                {props.content}    
            </div>
            
            
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            
            <div>I am a modal</div>
            <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
            </form> */}
        </Modal>
        </>
    )

}


export default ModalWindow;