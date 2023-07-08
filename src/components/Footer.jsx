import {NavLink} from 'react-router-dom'
import { useData } from '../context/dataContext'
export default function Footer(){
  const {candidate}=useData()
  return <footer>
    <small>Made with React by <NavLink to="https://github.com/Anush79/MCR-6" target='_blank'>{candidate}</NavLink></small>
  </footer>
}