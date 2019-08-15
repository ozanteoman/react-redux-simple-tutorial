const products = (state = [{product_name:'Teoman'}], action) => {

    switch (action.type) {
        case 'add_product':
            break;
        case 'update_product':
            break;
        default:
            return {...state}
    }

};

export default products;