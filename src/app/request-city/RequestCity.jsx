'use client';

import './RequestCity.css';
import { DatePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';


const RequestCity = () => {
    return (
        <>
            <div className="container">
                <div className="request-city-form">

                    <form >
                        <input type="text"
                            placeholder='Name of event'
                        />

                        <input type="text"
                            placeholder='Name of city'
                        />

                        <DatePicker placeholder='Event Start Date' />


                        <DatePicker placeholder='Event End Date' />

                        <div className="stand-size-select">
                            <input type="text" placeholder='Stand Size' />
                            <select name="">
                                <option value="SQMT">SQMT</option>
                                <option value="SQFT">SQFT</option>
                            </select>
                        </div>


                        <div className="budget-select">
                            <input type="number" placeholder='Budget(if any)' />
                            <select name="">
                                <option value="Dollar">Dollar</option>
                                <option value="Euro">Euro</option>
                                <option value="AED">AED</option>
                            </select>
                        </div>

                        <textarea name="" id=""></textarea>

                    </form>
                </div>
            </div>

        </>
    )
}

export default RequestCity