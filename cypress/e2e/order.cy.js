// import loginPage from '../support/pages/views/login'
import shaversPage from '../support/pages/views/shavers'
import catalogPage from '../support/pages/views/catalog'

import data from '../fixtures/order.json'
import orderPage from '../support/pages/views/order'

describe('pedido', ()=>{


    context ('usuário logado', ()=>{

        const {customer, shaver, service} = data

        before (()=>{

            cy.createUser(customer)
            cy.apiLogin(customer)
       
        })

        it ("deve poder solicitar serviços", ()=>{

            shaversPage.selectShaver(shaver.name)
            catalogPage.hasShaver(shaver.name)
            catalogPage.selectService(service.description)
            catalogPage.hasTitle(service.description)
            catalogPage.confirmOrder()
            orderPage.hasOrder()

        })
    })
})