import React from 'react';
import { GrClose } from "react-icons/gr";

const DetailPopup = ({modalHandler,modaldata}) => {
    return (
        <div>

            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal d-block" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content ">
                            <div class="modal-header">
                                <h5 class="modal-title">{modaldata?.title}</h5>
                                <button type="button" data-bs-dismiss="modal" onClick={()=>modalHandler()}><GrClose /></button>
                            </div>
                            <div class="modal-body">
                                <p className=" justify-content-center">Description - {modaldata?.description}</p>
                                <div className="d-flex justify-content-around">
                                    <span>Type - {modaldata?.type}</span>
                                    <img src={modaldata?.imgurl} height={100} width={100} alt="img.png" />
                                </div>
                            </div>
                            <div class="modal-footer ">
                                <button type="button" class="btn btn-secondary" onClick={()=>modalHandler()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPopup
