describe('API Tests.', () => {
    it('List users', () => {
        let url = 'https://reqres.in/api/users?per_page=20'

        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            response.body.data.forEach((user) => {
                if (user.id % 2 !== 0) {
                    cy.log(user)
                }
            })
        })


        // .then((res) => {
        //     cy.wrap(res).its('status').should('be.equal', 200);
        //     cy.wrap(res).its('body.data').should('exist');
        //     //console.log(cy.wrap(res).its('body.data')[0])
        //     //users = cy.wrap(res).its('body.data');
        //     //cy.wrap(res => users = res.body.data);
        //     //.then(res => response = res)
        //     //console.log(users)
        //     for (let i = 1; i < 12; i++) {
        //         console.log(i);
        //         //console.log(users[i]);
        //         cy.wrap(res => { res.body.data[i].id }).should('be.equal', i)
        //     }
        // });

        //debugger;
        //console.log(cy.wrap(response))
    });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-10-01T00:00:00.000Z, timestampEnd = 2021-11-30T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-10-01T00:00:00.000Z';
    //         const timestampEnd = '2021-11-30T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-10-16T23:59:59.999Z, pageSize = 100 - has data', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-10-16T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-02T23:59:59.999Z, pageSize = 100 - has not data', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-02';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 0', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '0';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 5', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '5';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 50', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '50';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 255', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '255';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 500', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '500';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1000', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1000';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1001', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1001';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });
    // });

    // describe('Error test scenarios for "Get Device Communications" functionality', () => {
    //     it('ADMIN: timestampStart = \'\', timestampEnd = \'\', pageSize = \'\'', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '';
    //         const pageSize = '';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = \'\', timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = a, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = 'a';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = \'\', pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = a, pageSize = 100;', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = 'a';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-01-02T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = '2021-01-02';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-10-16T23:59:59.999Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = \'\' (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '';

    //         cy.getCommunications(profile_admin, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = -1 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '-1';

    //         cy.getCommunications(profile_admin, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10000 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10000';

    //         cy.getCommunications(profile_admin, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 200);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (Device ID not found)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceNotFound, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('ADMIN: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100  (Device ID blank)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_admin, idDeviceBlank, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-10-01T00:00:00.000Z, timestampEnd = 2021-11-30T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-10-01T00:00:00.000Z';
    //         const timestampEnd = '2021-11-30T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-10-16T23:59:59.999Z, pageSize = 100 - has data', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-10-16T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-02T23:59:59.999Z, pageSize = 100 - has not data', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-02';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 0', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '0';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 5', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '5';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 50', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '50';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 255', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '255';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 500', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '500';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1000', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1000';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1001', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1001';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = \'\', timestampEnd = \'\', pageSize = \'\'', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '';
    //         const pageSize = '';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = \'\', timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = a, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = 'a';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = \'\', pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = a, pageSize = 100;', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = 'a';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-01-02T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = '2021-01-02';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-10-16T23:59:59.999Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = \'\' (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '';

    //         cy.getCommunications(profile_operations_manager, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = -1 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '-1';

    //         cy.getCommunications(profile_operations_manager, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10000 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10000';

    //         cy.getCommunications(profile_operations_manager, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (Device ID not found)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceNotFound, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('OPERATIONS_MANAGER: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100  (Device ID blank)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_operations_manager, idDeviceBlank, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-10-01T00:00:00.000Z, timestampEnd = 2021-11-30T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-10-01T00:00:00.000Z';
    //         const timestampEnd = '2021-11-30T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-10-16T23:59:59.999Z, pageSize = 100 - has data', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-10-16T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-02T23:59:59.999Z, pageSize = 100 - has not data', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-02';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-01-01T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-01-01';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 0', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '0';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 5', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '5';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 50', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '50';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 255', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '255';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 500', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '500';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1000', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1000';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 1001', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '1001';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = \'\', timestampEnd = \'\', pageSize = \'\'', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '';
    //         const pageSize = '';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = \'\', timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = a, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = 'a';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = \'\', pageSize = 100', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = a, pageSize = 100;', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = 'a';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res).its('body.errors').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-01-02T00:00:00.000Z, timestampEnd = 2021-01-01T23:59:59.999Z, pageSize = 100;', () => {
    //         const timestampStart = '2021-01-02';
    //         const timestampEnd = '2021-01-01';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-10-16T23:59:59.999Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = \'\' (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '';

    //         cy.getCommunications(profile_support, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = -1 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '-1';

    //         cy.getCommunications(profile_support, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 10000 (device type different SC415)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '10000';

    //         cy.getCommunications(profile_support, idDeviceOtherSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100 (Device ID not found)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceNotFound, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = \'\', timestampEnd = \'\', pageSize = \'\'', () => {
    //         const timestampStart = '';
    //         const timestampEnd = '';
    //         const pageSize = '';

    //         cy.getCommunications(profile_support, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 404);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('SUPPORT: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100  (Device ID blank)', () => {
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile_support, idDeviceBlank, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 400);
    //                 cy.wrap(res).its('body').should('exist');
    //                 cy.wrap(res => { res.body[0].continuationToken }).should('exist');
    //                 cy.wrap(res => { res.body[0].packets }).should('exist').its('length').should('be.gte', 1);
    //         });
    //     });

    //     it('INVALID PASSWORD: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const profile = 'invalid_password';
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 401);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });

    //     it('USER NOT FOUND: timestampStart = 2021-11-09T00:00:00.000Z, timestampEnd = 2021-12-10T23:59:59.999Z, pageSize = 100', () => {
    //         const profile = 'user_not_found';
    //         const timestampStart = '2021-11-09T00:00:00.000Z';
    //         const timestampEnd = '2021-12-10T23:59:59.999Z';
    //         const pageSize = '100';

    //         cy.getCommunications(profile, idDeviceSc, timestampStart, timestampEnd, '', pageSize)
    //             .then((res) => {
    //                 cy.wrap(res).its('status').should('be.equal', 401);
    //                 cy.wrap(res).its('body').should('exist');
    //         });
    //     });
});