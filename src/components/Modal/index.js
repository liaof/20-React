import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {// imported props from Photolist/index.js

    const {name, category, description, index } = currentPhoto; // destructured from Photolist/index.js

    return (
        //JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>{description}</p>
                {/* onClick={onClose} refers to this property: <Modal onClose={toggleModal} from Photolist.index.js */}
                {/* the button will trigger onClick=>onClose=>toggleModal and set isModalOpen=false */}
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;
