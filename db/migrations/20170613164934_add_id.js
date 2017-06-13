
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('messages', function(table) {
      table.increments('id').unsigned().primary();
    }),
    knex.schema.table('conversations', function(table) {
      table.increments('id').unsigned().primary();
    }),
    knex.schema.table('matches', function(table) {
      table.boolean('temp').defaultTo(false);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('messages', function(table) {
      table.dropColumn('id');
    }),
    knex.schema.table('conversations', function(table) {
      table.dropColumn('id');
    }),
    knex.schema.table('matches', function(table) {
      table.dropColumn('temp');
    })
  ]);
};
