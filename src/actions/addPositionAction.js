import axios from 'axios';

export default async (positionData) => {
    console.log('add position action fired',positionData)

    const createUserUrl = `${window.apiHost}/employers/create-position`
    const {data} = await axios.post(createUserUrl,positionData)
    console.log('addPositionResutls:',data)
    return {
        type: 'addPositionAction',
        payload: {
            data
        }
    }
}