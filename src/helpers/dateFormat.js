export const dateFormat = (date) => {
    let newDate = new Date(date)
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDate();
    const monthNames = ["Januari","Februari","Maart","April","Mei","Juli","Juni","Augustus","September","Oktober","November","December"]

    return `${day} ${monthNames[month]} ${year}`
}