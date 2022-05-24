import request from 'supertest';
import superAdmins from '../models/Super-admins';
import superAdminsSeed from '../seed/super-admins';
import app from '../app';

beforeAll(async () => {
  await superAdmins.collection.insertMany(superAdminsSeed);
});

let superAdminId;

describe('GET ALL superAdmins', () => {
  test('All superAdmins list status response successful', async () => {
    const response = await request(app).get('/api/super-admins').send();
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.message).toEqual('All Superadmins');
    expect(response.error).toBeFalsy();
  });
});

describe('GET superAdmin by ID', () => {
  test('SuperAdmin search by ID status response successful', async () => {
    const response = await request(app).get('/api/super-admins/628ab4225aae617fa8002c22').send();
    expect(response.statusCode).toBe(200);
    expect(response.error).toBeFalsy();
  });

  test('SuperAdmin search by ID status response unsuccessful', async () => {
    const response = await request(app).get('/api/super-admins/id/').send();
    expect(response.statusCode).toBe(400);
    expect(response.error).toBeTruthy();
  });
});

describe('GET superAdmins by filters', () => {
  test('SuperAdmins search by filters status response successful', async () => {
    const response = await request(app).get('/api/super-admins/filter').send({
      firstName: 'pedro',
      lastName: 'gomez',
      email: 'pedroGomezz@mail.com',
      active: false,
    });
    expect(response.statusCode).toBe(200);
    expect(response.error).toBeFalsy();
  });

  test('SuperAdmins search by filters status response unsuccessful', async () => {
    const response = await request(app).get('/api/super-admins/filter').send({
      firstName: '',
      lastName: '',
      email: '',
      active: '',
    });
    expect(response.statusCode).toBe(400);
    expect(response.error).toBeTruthy();
  });
});

describe('CREATE a superAdmin', () => {
  test('SuperAdmin created status response successful', async () => {
    const response = await request(app).post('/api/super-admins').send({
      firstName: 'juan',
      lastName: 'gomez',
      email: 'juanGomezz@mail.com',
      password: 'juangomez123',
      active: false,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toEqual('Superadmin created');
    expect(response.body.error).toBeFalsy();
    // eslint-disable-next-line no-underscore-dangle
    superAdminId = response.body.data._id;
  });

  test('SuperAdmin created status response unsuccessful', async () => {
    const response = await request(app).post('/api/super-admins').send();
    expect(response.statusCode).toBe(400);
    expect(response.error).toBeTruthy();
  });
});

describe('DELETE a superAdmin', () => {
  test('SuperAdmin deleted status response successful', async () => {
    const response = await request(app).delete(`/api/super-admins/${superAdminId}`).send();
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('User eliminated');
    expect(response.error).toBeFalsy();
  });

  test('SuperAdmin deleted status response unsuccessful', async () => {
    const response = await request(app).delete('/api/super-admins').send();
    expect(response.statusCode).toBe(404);
    expect(response.error).toBeTruthy();
  });
});

describe('UPDATE a superAdmin', () => {
  test('SuperAdmin updated status response successful', async () => {
    const response = await request(app).put('/api/super-admins/628ab4225aae617fa8002c22').send({
      firstName: 'pedro',
      lastName: 'gomez',
      email: 'pedroGomezz@mail.com',
      password: 'pedrogomez123',
      active: false,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('Super-Admin updated');
    expect(response.body.error).toBeFalsy();
  });

  test('SuperAdmin updated status response unsuccessful', async () => {
    const response = await request(app).put('/api/super-admins/').send();
    expect(response.statusCode).toBe(404);
    expect(response.error).toBeTruthy();
  });
});
