const chalk = require("chalk");
const chalkAnimation = require('chalk-animation');
const log = console.log

chalkAnimation.rainbow('This is a story about the most unlucky person alive.');

log(chalk.red("Otto is the most unlucky person alive, He chokes on his own spit, step on banana peel and fall, and etcs.") +
    chalk.Yellow("Otto is cursed and destined to be unlucky forever") +
    chalk.green("and he accepted the fact."));
