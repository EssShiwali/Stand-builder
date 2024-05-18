'use client';

import { useState } from 'react';
import './RequestCity.css';
import { DatePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';
import { FileTrigger, Button } from 'react-aria-components';

const RequestCity = () => {
    let [file, setFile] = useState(null);
    return (

        <div className="container">

            <h1 className='request-city-heading'>Tell us about your exhibition stand requirements</h1>
            <form className="request-city-form">
                <div className='event-details' >
                    <h3>Tell us about your event details</h3>
                    <div className="form-div-1">

                        <input type="text"
                            placeholder='Name of event'
                        />

                        <input type="text"
                            placeholder='Name of city'
                        />

                        <DatePicker placeholder='Event Start Date' />

                        <DatePicker placeholder='Event End Date' />

                    </div>
                    <h3>Stand size</h3>
                    <div className="form-div-1">

                        <div className="stand-size-select">
                            <input type="text" placeholder='Stand Size' id='rq-select-input' />
                            <select name="" className='rq-select'>
                                <option value="SQMT">SQMT</option>
                                <option value="SQFT">SQFT</option>
                            </select>
                        </div>


                        <div className="budget-select">
                            <input type="number" placeholder='Budget(if any)' id='rq-select-input' />
                            <select name="" className='rq-select'>
                                <option value="Dollar">Dollar</option>
                                <option value="Euro">Euro</option>
                                <option value="AED">AED</option>
                            </select>
                        </div>

                        <div className="upload-files">
                            <FileTrigger allowsMultiple
                                onSelect={(e) => {
                                    let files = Array.from(e);
                                    let filenames = files.map((file) => file.name);
                                    setFile(filenames);
                                }}>
                                <Button className='upload-files-button'>Select a file</Button>
                            </FileTrigger>

                            {file && file.map((filename, index) => (
                                <div key={index}>{filename}</div>
                            ))}

                        </div>

                    </div>

                    <textarea name="" id=""></textarea>



                </div>

                <div className="contac-details-form">
                    <h3>Contact details</h3>
                    <div className="form-div-1">


                        <input type="text" placeholder='Your name*' required />
                        <input type="email" placeholder='Your email*' required />
                        <input type="tel" placeholder='Phone Number*' required />

                    </div>

                    <div className="form-div-1">
                        <input type="text" placeholder='Company Name*' required />
                        <input type="text" placeholder='Company webiste*' required />

                        <select name="Select Country" className='rq-select-country'>
                        <option value="Select Country">Select Country</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Angola">Angola</option>
                            <option value="Benin">Benin</option>
                        </select>

                    </div>

                  
                </div>


                <div className="align-button">
                        <button type='submit' className='upload-files-button form-submit-button'>Submit</button>
                    </div>
            </form>

        </div>


    )
}

export default RequestCity