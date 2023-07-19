describe('API Tests.', () => {
    it('List users', () => {
        let url = `${Cypress.config().baseUrl}` + '/users?per_page=20'

        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            cy.wrap(response).its('status').should('be.equal', 200);
            cy.task('log', 'Users with odd id:');
            response.body.data.forEach((user) => {
                if (user.id % 2 !== 0) {
                    cy.task('log', JSON.stringify(user));
                }
            })
        })
    });

    it('Create user', () => {
        let url = `${Cypress.config().baseUrl}` + '/users'
        cy.request({
            method: 'POST',
            url: url,
            failOnStatusCode: false,
            body: {
                "email": "tester@dummy.com",
                "password": "mypass"
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => {
            cy.wrap(resp).its('status').should('be.equal', 201);
            const respDate = resp.body.createdAt.substring(0, 10);
            //console.log(respDate); // 2023-07-18
            let currentDate = new Date().toJSON().slice(0, 10);
            cy.wrap(respDate).should('be.equal', currentDate);
        })
    });

    it('Upadte user', () => {
        let url = `${Cypress.config().baseUrl}` + '/user/777'
        const email = "tester777@dummy.com";
        const pass = "myPass"
        cy.request({
            method: 'PATCH',
            url: url,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": pass
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => {
            cy.wrap(resp).its('status').should('be.equal', 200);
            cy.wrap(resp.body.email).should('be.equal', email);
            cy.wrap(resp.body.password).should('be.equal', pass);
        })
    });

    it('Get 10 users', () => {
        // Cypress doesn't allow Cypress commands to run asynchronously.
        // It takes 9 seconds to run the code below.
        //
        // cy.request(`${Cypress.config().baseUrl}` + '/users?delay=6').then((response) => {
        //     console.log('Delay');
        //     expect(response.status).to.eq(200);
        // });
        // cy.request(`${Cypress.config().baseUrl}` + '/users?delay=3').then((response) => {
        //     console.log('Delay 2');
        //     expect(response.status).to.eq(200);
        // });

        for (let i = 1; i <= 10; i++) {
            cy.request(`${Cypress.config().baseUrl}/users/${i}`).then((response) => {
                // console.log(i);
                expect(response.status).to.eq(200);
            });
        }
    });

});