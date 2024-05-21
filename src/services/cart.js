export async function addItem(userCart,item){
    userCart.push(item)
}

export async function deleteItem(userCart,name){
    const index = userCart.findIndex((i)=> i.name === name)

    if(index != -1 ){
        userCart.splice(index,1)
    }else{

        console.log("Item não encontrado.")
    }

}

export async function displayCart(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1} | ${item.name} - R$ ${item.price} - ${item.quantity} Subtotal: ${item.subtotal()}`)
    });
}

export async function removeItem(userCart,index){

    index -= 1
    if(index >= 0 && index < userCart.length){
        userCart.splice(index,1)
    }
}

export async function calculateTotal(userCart){
    return userCart.reduce((total,item)=> total + item.subtotal(),0)

}