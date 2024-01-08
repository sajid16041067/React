import React, { useContext, useEffect } from 'react'
import { ToastContext } from '../App';

export default function Toast() {
    const {setToast ,toastInfo} = useContext(ToastContext);
    const handleClose = () =>{
      setToast({show:false});
    }

    useEffect(() => {
      const timeout = setTimeout(() => {
        handleClose();
      }, 4000);
      return () => {
        clearTimeout(timeout);
      }
    })
    
    
  return (
    <div className='position-fixed d-flex justify-content-center top-0 end-0 p-3'>
    <div className={`border border-${toastInfo.type} ${toastInfo.show ? "toast show": "toast hide"}`} role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
   
    <strong className={`me-auto text-${toastInfo.type}`}>{toastInfo.msg}</strong>

    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={handleClose}></button>
  </div>
  
</div>
</div>
  )
}
