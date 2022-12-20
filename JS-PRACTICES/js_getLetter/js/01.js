
function getLetter(s) {
    
    switch(s.charAt(0))
    {
        case 'a':
            return 'A';
        break;
        
        case 'b','c','d','f','g':
            return 'B';
        break;
        
        case 'h','j','k','l','m':
            return 'C';
        break;

        default:
            return 'D';
            break;
        
    }
}

console.log(getLetter('hbdfb'));