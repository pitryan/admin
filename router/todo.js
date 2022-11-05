const express = require('express');

const router = express.Router();

router.get('/', async(req, res) => {
    if (!req.session.user) {
        res.redirect('/auth/login');
    } else {
        res.render('pages/todo', { tasks: req.session.tasks });
    }
});

router.post('/add', async(req, res) => {
    // if there's no tasks in the session, create one
    if (!req.session.tasks) {
        req.session.tasks = [];
    }

    // add new task
    const newTask = req.body.taskName;
    req.session.tasks.push(newTask);

    res.redirect('/todo');
});

router.post('/done/:index', async(req, res) => {
    // get the index of the task to be deleted
    const index = req.params.index

    // only delete if there's that task
    if (req.session.tasks && index < req.session.tasks.length) {
        req.session.tasks.splice(index, 1);
    }

    res.redirect('/todo');
});

module.exports = router;