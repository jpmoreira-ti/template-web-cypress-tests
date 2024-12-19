import { faker } from '@faker-js/faker'

const productData = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  }

describe('Fake Store API', () => {
  it('Successfully GETs products', () => {
    cy.request('GET', 'https://fakestoreapi.com/products')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(20)
      })
  })

  it('Successfully GET Product by Id', () => {
    cy.fixture('fakestoreData').as('fakestoreDataJson').then((fakestoreDataJson) => {
      cy.request('GET', `https://fakestoreapi.com/products/${fakestoreDataJson.id}`)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id', fakestoreDataJson.id)
          expect(response.body).to.have.property('title', fakestoreDataJson.title)
        })
    })
  })

  it('Successfully POST Product by Id', () => {
      cy.request('POST', `https://fakestoreapi.com/products`, productData)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('title', productData.title)
          expect(response.body).to.have.property('price', productData.price)
          expect(response.body).to.have.property('description', productData.description)
          expect(response.body).to.have.property('image', productData.image)
          expect(response.body).to.have.property('category', productData.category)
        })
    })
  })