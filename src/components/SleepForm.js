import React from 'react';
import { useFormik } from 'formik';

const SleepForm = () => {
    
    const formik = useFormik({
        initialValues: {
            nightOfDate: '',
            bedtime: '',
            sleepDate: '',
            approximateSleepTime: '',
            sleepInterrupted: 0,
            sleepLostFromInterruptions: 0,
            wakeUpDate: '',
            wakeUpTime: '',
            ateSpicy: false,
            drankAlcohol: false,
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
        <form onSubmit={submitSleeplog}>
            <div>TEST SLEEP LOG</div>
            <button>Submit</button>
        </form>
    )
}

export default SleepForm;