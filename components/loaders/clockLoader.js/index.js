import styles from './styles.module.scss';
import ClockLoader  from "react-spinners/ClockLoader";

export default function ClockLoaderSpinner({loading}){
    return (
        <div className={styles.loader}>
            <ClockLoader color='#36d7b7' loading={loading}/>
        </div>
    )
}