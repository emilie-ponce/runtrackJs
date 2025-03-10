function bisextile(année){
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("L'année 2026 est-elle bissextile ?" + bisextile(2025));