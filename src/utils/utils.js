import moment from "moment";

function displayDate(date) {
    return date.moment().format("DD.MM.YYYY hh:mm");
}