import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import { setAlert } from '../store/actions';
import { connect } from 'react-redux';
import './AlertBar.css';

const AlertBar = ({alert, setAlert}) => {
    const { status = "success" || "warning", message = "" } = alert;
     
    useEffect(() => {
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }, []);

    return (<Alert className='alertBar' severity={status}>{message}</Alert>)
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    };
  };
  
const mapDispatchToProps = dispatch => {
return {
    setAlert: (alert) => dispatch(setAlert(alert))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
