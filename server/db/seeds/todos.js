exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(function () {
      return knex('todos').insert([
        { id: 1, task: 'do the laundry', completed: false },
        { id: 2, task: 'do the dishes', completed: false },
        { id: 3, task: 'do homework', completed: false },
      ])
    })
}
