function main() {
    var hour = parseInt(readLine(), 10);
    time = hour >= 0 && hour <= 12 ? "am" : "pm";
    console.log(time)
}