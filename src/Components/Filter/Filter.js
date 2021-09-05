import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

export default function Filter({ filtredName}) {
        return (
            <div className={styles["filter-wrapper"]}>
                <label className={styles["filter-label"]}>Find contacts by name
                    <input
                        type="text"
                        name="name"
                        onChange={filtredName}
                        className={styles["filter-input"]}
                    />
                </label>
        
            </div>
        )
    }

Filter.propTypes = {
    filtredName: PropTypes.func,
}
