import React from 'react';
import { Field, Formik, useFormik } from 'formik';
import { yesterday } from '../utils/dateConstants';

import Select from '../Reusables/Select';
import dayjs from 'dayjs';

const SleepForm = () => {

    const initialValues = {
        nightOfDateMonth: yesterday.month() + 1,
        nightOfDateDay: '',
        nightOfDateYear: '',
        bedtime: '',
        sleepDate: '',
        approximateSleepTime: '',
        sleepInterrupted: 0,
        sleepLostFromInterruptions: 0,
        wakeUpDate: '',
        wakeUpTime: '',
        ateSpicy: false,
        drankAlcohol: false,
        useMarijuana: false,            
        sleepMeds: false,
        userId: '',
        notes: '',
    }

    const submitSleeplog = values => {
        console.log(values, "SUBMITTING SLEEPLOG")
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitSleeplog}
        >
            {props => (<form onSubmit={props.handleSubmit}>
                <div>
                    <Select name="nightOfDateMonth" type="text" options={[1,2,3,4,5,6,7,8,9,10,11,12]}/>
                    {/* <Field name="nightOfDateDay" type="text" value={20} options={[1,2,3,4,5,30]}/>
                    <Field name="nightOfDateYear" type="text" value={yesterday.year()}/> */}
                </div>
                <button type="submit">Submit</button>
            </form>)}
        </Formik>
    )
}

export default SleepForm;