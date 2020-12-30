(async () => {
    const db = require('./db')
    console.log('Começou')
    
    // console.log('adicionando')
    // await db.insertCustomer({name: 'doidao', yearOld: 20, uf: 'RS'})

    // console.log('atualizando')
    // await db.updateCustomer(1, {name: 'julin', yearOld: 16, uf: 'RJ'})

    console.log('Deletando')
    await db.deleteCustomer(4)
    
    console.log('Selecionando')
    const clients = await db.selectCustoners()
    
    console.log(clients)

})()
