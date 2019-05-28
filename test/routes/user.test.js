const request = require('supertest');

const app = require('../../src/app');

const mail = `${Date.now()}@mail.com`;

test('Deve listar todos os usuarios', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Deve inserir um usuario com sucesso', () => {
  return request(app).post('/users')
    .send({ name: 'Gabriel Araujo', mail, password: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Gabriel Araujo');
    });
});

test('Não deve inserir usuario sem nome', () => {
  return request(app).post('/users')
    .send({ mail: 'israel@mail.com', password: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome é um atributo obrigatório');
    });
});

test('Não deve inserir usuario sem email', () => {
  return request(app).post('/users')
    .send({ name: 'Gabriel Araujo', password: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Email é um atributo obrigatório');
    });
});

test('Não deve inserir usuario sem senha', () => {
  return request(app).post('/users')
    .send({ name: 'Gabriel Araujo', mail: 'israel@mail.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é um atributo obrigatório');
    });
});

test('Não deve inserir usuario com email existente', () => {
  return request(app).post('/users')
    .send({ name: 'Gabriel Araujo', mail, password: '123456' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Já existe um usuário com esse email');
    });
});

// FORMAS DIFERENTES DE FAZER VALIDAÇÕES
// test('Não deve inserir usuario sem email', async () => {
//   const result = await request(app).post('/users')
//     .send({ name: 'Gabriel Araujo', password: '123456' });
//   expect(result.status).toBe(400);
//   expect(result.body.error).toBe('Email é um atributo obrigatório');
// });

// test('Não deve inserir usuário sem senha', (done) => {
//   request(app).post('/users')
//     .send({ name: 'Gabriel Araujo', mail: 'israel@mail.com' })
//     .then((res) => {
//       expect(res.status).toBe(400);
//       expect(res.body.error).toBe('Senha é um atributo obrigatório');
//       done();
//     })
//     .catch(err => done.fail(err));
// });
