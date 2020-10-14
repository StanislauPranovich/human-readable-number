module.exports = function toReadable (num) {
        const units = ['one','two','three','four','five','six','seven','eight','nine']
        const decimals = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
        const secDec = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        if(num === 0) return 'zero';
        num = String(num);
        if(num.length === 3 && num[1] === '0' && num[2] === '0') {
            return (units[num[0]-1] + " " + 'hundred');
        } else if(num.length === 3 && num[1] === '0') {
            return (units[num[0]-1] + " " + 'hundred' + " " + units[num[2]-1]);
        } else if(num.length === 3 && num[2] === '0') {
            return (units[num[0]-1] + " " + 'hundred' + " " + decimals[num[1]-1]);
        } else if(num.length === 3 && num[1] === '1') {
            return (units[num[0]-1] + " " + 'hundred' + " " + secDec[num[2]]);
        } else if(num.length === 3) {
            return (units[num[0]-1] + " " + 'hundred' + " " + decimals[num[1]-1] + " " + units[num[2]-1]);
        } else if(num.length === 2 && num[0] === "1") {
            return (secDec[num[1]]);
        } else if(num.length === 2 && num[1] === "0") {
            return decimals[num[0]-1];
        } else if(num.length === 2) {
            return (decimals[num[0]-1] + " " + units[num[1]-1]);
        } else if(num.length === 1) {
            return units[num[0]-1];         
        }
    }
