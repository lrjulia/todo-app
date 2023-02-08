import todoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={todoLogo} alt="Logo" />

            <form className={styles.newTaskForm}>
                <input type="text" placeholder='add a new task'/>
                <button>
                    Create
                    <AiOutlinePlusCircle size={20}/>    
                </button>
            </form>
        </header>
    )
}