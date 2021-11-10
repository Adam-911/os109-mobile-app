const getStatus = (status) => {
    let result;

    switch(status) {
        case 1: 
            result = "Новая";
            break;
        case 2:
            result = "В работе";
            break;
        case 3: 
            result = "Исполнено"   
            break;  
    }

    return result;
}

export {getStatus};