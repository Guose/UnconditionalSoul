/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Deletes ALL existing entries
  await knex('Users').del()

  await knex('Users').insert(
      [
        {
          firstname: 'Justin',
          lastname: 'Elder',
          username: 'JustinElder',
          password: '5p3ctrum!',
          email: 'justin@showcasemi.com',
          phoneNumber: 4259234362,
          birthdate: moment('1979-08-14').format('YYYY-MM-DD')
        }
      ]
  );
};