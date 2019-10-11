
export default(state=0,action) => {
    const p = action.payload
    switch(action.type) {
        case 'addPositionAction':
            const positionId = p.data.position_id
            return positionId
        default:
            return state
    }
}