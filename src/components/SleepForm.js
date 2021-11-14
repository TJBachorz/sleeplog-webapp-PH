import React from 'react';

const SleepForm = () => {
    
    const submitSleeplog = () => {
        console.log("SUBMITTING SLEEPLOG")
    }

    return (
        <form onSubmit={submitSleeplog}>
            
        </form>
    )
}