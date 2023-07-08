import {ToastContainer} from 'react-toastify'
export default function ToastBox(){
  return <ToastContainer
  position="bottom-left"
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
}