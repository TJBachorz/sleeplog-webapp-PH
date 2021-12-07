import React from 'react';
import { Field, Formik, useFormik } from 'formik';
import { yesterday } from '../utils/dateConstants';

import Select from '../Reusables/Select';
import dayjs from 'dayjs';

const SleepForm = () => {

    console.log(yesterday.year())

    const formik = useFormik({
        initialValues: {
            nightOfDateMonth: '',
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
        },
    })

    const submitSleeplog = values => {
        console.log(values)
        console.log(values, "SUBMITTING SLEEPLOG")
    }

    return (
        <Formik
            initialValues={formik.initialValues}
            onSubmit={submitSleeplog}
        >
            {props => (<form onSubmit={props.handleSubmit}>
                <div>
                    <Select name="nightOfDateMonth" onChange={props.handleChange} type="text" value={12} options={[1,2,3,4,5,6,12]}/>
                    <Select name="nightOfDateDay" type="text" value={20} options={[1,2,3,4,5,30]}/>
                    <Field name="nightOfDateYear" type="text" value={yesterday.year()}/>
                </div>
                <button type="submit">Submit</button>
            </form>)}
        </Formik>
    )
}

export default SleepForm;