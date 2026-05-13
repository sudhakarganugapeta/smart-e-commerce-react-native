import moment from "moment"
export const getDateFromFireStoreTimeStampObject = (dateobj) => {
    const date = new Date(dateobj.seconds*1000)
    return moment(date).format("MMMM Do YYYY, h:mm:ss A")
}