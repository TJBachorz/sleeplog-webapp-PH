import React from 'react';
import { useFormik } from 'formik';
import { yesterday } from '../utils/dateConstants';

import Select from '../Reusables/Select';
import dayjs from 'dayjs';

const SleepForm = () => {

    console.log(yesterday.daysInMonth())

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
        onSubmit: values => {
            console.log(values)
        }
    })

    const submitSleeplog = e => {
        e.preventDefault();
        console.log("SUBMITTING SLEEPLOG")
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                {/* <Select name="nightOfDateMonth" type="text" value={[1,12]} options={[12]}/>
                <Select name="nightOfDateDay" type="text" value={[1,31]} options={[1-30]}/>
                <Select name="nightOfDateYear" type="text" value={[2021]} options={[1-30]}/> */}
            </div>
            <button>Submit</button>
        </form>
    )
}

export default SleepForm;