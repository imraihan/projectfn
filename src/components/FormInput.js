import React from "react";
import classes from '../styles/FormInput.module.css';
import {FaSave, FaRegTimesCircle} from "react-icons/fa";
export default function FormInput() {
    return (
      <div>
        <div className={classes.signupFrm}>
            <div className={classes.wrapper}>
                <form action="" className={classes.form}>
                    <div className={classes.buttonBox}>
                    <button className={classes.save}>
                        <i><FaSave /></i> Save
                    </button>
                    <button className={classes.cancel}>
                        <i><FaRegTimesCircle /></i> Cancel
                    </button>
                    </div>
                    <div className={classes.line-1}></div>
                    <h3>Site Id: 1</h3><br />
                    <div className={classes.inputContainer}>
                    <input type="text" className={classes.input} placeholder="a" />
                    <label for="" className={classes.label}>Name</label>
                    </div>
                    <div className={classes.inputContainer}>
                    <input type="text" className={classes.input} placeholder="a" />
                    <label for="" className={classes.label}>Jurisdiction/City/Region</label>
                    </div>
                    <div className={classes.inputContainer}>
                    <textarea className={`${classes.input} ${classes.textarea}`} placeholder="a" ></textarea>
                    <label for="" className={classes.label}>Site Description</label>
                    </div>

                    <div className={`${classes.inputContainer} ${classes.widthDirectionLatitude}`}>
                    <input type="text" className={classes.input} placeholder="a" />
                    <label for="" className={classes.label}>Latitude</label>
                    </div>

                    <div className={`${classes.inputContainer} ${classes.widthDirectionLongitude}`}>
                    <input type="text" className={classes.input} placeholder="a" />
                    <label for="" className={classes.label}>Longitude</label>
                    </div>

                    <div className={classes.auditlog}>
                    <label>Audit Log:</label>
                    <br /><br />
                    <div className={classes.line-1}></div>
                    <br />
                    <div className={classes.report}>
                        <label className={classes.created}>Created By <span>Simon</span> on 2/1/2020, 12:00:00 AM</label><br />
                        <label className={classes.updated}>Updated By <span>Nandita</span> on 1/12/2021, 11:00:50 PM </label>  
                    </div>        
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}