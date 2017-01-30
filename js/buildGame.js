var family = require('../data/family');
var shuffle = require('knuth-shuffle').knuthShuffle;

function buildGame()
{
    var root = family();
    var options = parse(root);
    var questions = [];

    createQuestions(root, questions, options);

    shuffle(questions);
    for (var i = 0; i < questions.length; i++) {
        questions[i].index = i;
    }

    questions.push({ index: i, last: true});

    return questions;
}

function parse(root)
{
    var options = {names: {M: new Set(), F: new Set()}, surnames: new Set(), fullNames: new Set()};

    parseFamily(root, options);

    return {
        names: {M: Array.from(options.names.M), F: Array.from(options.names.F)},
        surnames: Array.from(options.surnames),
        fullNames: Array.from(options.fullNames)
    }
}

function parseFamily(family, options)
{
    addOptions(family.familiar, options, true);
    if (typeof family.pareja !== 'undefined') {
        addOptions(family.pareja, options, false);
    }

    if (typeof family.descendientes !== 'undefined') {
        for (var i = 0; i < family.descendientes.length; i++) {
            parseFamily(family.descendientes[i], options);
        }
    }

    return options;
}

function addOptions(person, options, addSurname)
{
    options.names[person.sexo].add(person.nombre);
    options.fullNames.add(person.nombre + ' ' + person.apellidos);
    if (addSurname) {
        options.surnames.add(person.apellidos);
    }
}

function createQuestions(family, questions, options, parent)
{
    var partner;
    if (typeof family.pareja !== 'undefined') {
        partner = family.pareja;
        if (family.pareja.activo) {
            questions.push(createQuestion(family.pareja, options, false, family.familiar));
        }
    }

    if (family.familiar.activo) {
        questions.push(createQuestion(family.familiar, options, true, partner, parent));
    }

    if (typeof family.descendientes !== 'undefined') {
        for (var i = 0; i < family.descendientes.length; i++) {
            createQuestions(family.descendientes[i], questions, options, family.familiar);
        }
    }
 }

function createQuestion(person, options, surname, partner, parent)
{
    var question;
    var solutions;
    var answer;
    var choices = ['name'];

    if (surname == true) {
        choices.push('surname');
    }

    if (typeof partner != 'undefined') {
        choices.push('partner');
    }

    if (typeof parent != 'undefined') {
        choices.push('parent');
    }

    switch (choices[Math.floor(Math.random() * choices.length)])
    {
        case 'name':
            question = 'Cuál es mi nombre?';
            solutions = randomizeOptions(person.nombre, options.names[person.sexo]);
            answer = person.nombre;
            break;
        case 'surname':
            question = 'Cuál es mi apellido?';
            solutions = randomizeOptions(person.apellidos, options.surnames);
            answer = person.apellidos;
            break;
        case 'partner':
            question = 'Cuál es el nombre de mi pareja?';
            solutions = randomizeOptions(partner.nombre + ' ' + partner.apellidos, options.fullNames);
            answer = partner.nombre + ' ' + partner.apellidos;
            break;
        case 'parent':
            question = 'Cuál es el nombre de mi progenitor?';
            solutions = randomizeOptions(parent.nombre + ' ' + parent.apellidos, options.fullNames);
            answer = parent.nombre + ' ' + parent.apellidos;
            break;
    }

    return {
        picture: () => person.avatar(),
        question: question,
        options: solutions,
        answer: answer,
        last: false
    }
}

function randomizeOptions(answer, all)
{
    var options = new Set([answer]);

    while (options.size < 4) {
        options.add(all[Math.floor(Math.random() * all.length)]);
    }

    return shuffle(Array.from(options));
}

module.exports = buildGame;
