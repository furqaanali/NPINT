export const CHANGE_PARK = 'CHANGE_PARK'

export const parkAction = payload => ({
    type: CHANGE_PARK,
    payload: {...payload}
})