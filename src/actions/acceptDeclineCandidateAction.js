import axios from 'axios';

export default(acceptDeclineValue) => {
    console.log('acceptDeclineActionFired')
    console.log(acceptDeclineValue)
    const position_id = acceptDeclineValue.position_id;
    const userId = acceptDeclineValue.userId;
    const value = acceptDeclineValue.acceptDeclineValue;
    const acceptDeclineUrl = `${window.apiHost}/candidates/accept-decline-candidate/${position_id}/${userId}/${value}`
    const axiosResp = axios.post(acceptDeclineUrl,acceptDeclineValue)
    return {
        type: 'acceptDecline',
        payload: axiosResp
    }
}