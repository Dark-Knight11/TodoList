module.exports = () => {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }
    return today.toLocaleDateString("en-IN", options);
}