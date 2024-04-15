import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';

export default function OwnerDeatils() {

    return (
        <div >
            <Paper sx={{ padding: '15px', margin: '25px 0 0 0 ', zIndex: 10, position: 'relative', textAlign: 'left' }} elevation={3}>
                <div className=" ">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div style={{margin:'15px 0'}} className="">
                                        <strong>
                                            My Ownership
                                        </strong>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <div className="">
                                            <div className="">
                                                Contract # 999999999048
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="" style={{ margin: '15px 0 0 0' }}>
                            <div className="">
                                <div className="">
                                    <div  className="">
                                        <strong >Points Summary</strong>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <span className="">
                                            <div className="">
                                                Current Use Year
                                            </div>
                                        </span>
                                        <span className="">
                                            <div className="">
                                                Available Points
                                            </div>
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            200,000
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <span className="">
                                        <div className="">
                                            Use Year Date
                                        </div>
                                    </span>
                                    <div className="">
                                        <div className="">
                                            Jun 30, 2024
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}