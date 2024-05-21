'use client';

import { DatePicker, Space } from 'antd';
import './RequestCity.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
    name: 'file',

    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name}  upload failed.`);
        }
    },
};

const RequestCity = () => {
    const { RangePicker } = DatePicker;
    return (
<div className='form-backround'>
        <div className="container">

            <h1 className='request-city-heading'>Tell us about your exhibition stand requirements</h1>
            <form className="request-city-form">
                <div className='event-details' >
                    <h3>Tell us about your event details</h3>
                    <div className="form-div">

                        <input type="text"
                            placeholder='Name of event'
                            className='div-inputs'
                        />

                        <input type="text"
                            placeholder='Name of city'
                            className='div-inputs'
                        />

                        <Space direction="vertical" >
                            <RangePicker className='rq-datepicker'
                              format={{
                                format: 'DD-MM-YYYY',
                                type: 'mask',
                              }}
                            />
                        </Space>

                    </div>
                    <h3>Stand size</h3>
                    <div className="form-div-1">

                        <div className="stand-size-select">
                            <input type="text" placeholder='Stand Size' className='rq-select-input' />
                            <select name="" className='rq-select'>
                                <option value="SQMT">SQMT</option>
                                <option value="SQFT">SQFT</option>
                            </select>
                        </div>


                        <div className="budget-select">
                            <input type="number" placeholder='Budget(if any)' className='rq-select-input' />
                            <select name="" className='rq-select'>
                                <option value="Dollar">Dollar</option>
                                <option value="Euro">Euro</option>
                                <option value="AED">AED</option>
                            </select>
                        </div>

                        <Upload {...props} multiple>
                            <Button className='ant-d-upload' icon={<UploadOutlined />}>Upload(Pictures for reference)</Button>
                        </Upload>


                    </div>

                    <textarea placeholder='Any other information about the requirment of your booth...'></textarea>



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

                        <select name="Select Country" className='rq-select-country' >
                            <option value="Select Country">Select Country</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Angola">Angola</option>
                            <option value="Benin">Benin</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Congo(Brazzaville)">Congo(Brazzaville)</option>
                            <option value="Congo(Kinshaha)">Congo(Kinshaha)</option>
                            <option value="Dji"></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                    </div>


                </div>


                <div className="align-button">
                    <button type='submit' className=' form-submit-button'>Submit</button>
                </div>
            </form>

        </div>
</div>

    )
}

export default RequestCity