import repl = require('repl');

import('./matrix').then(module => {
    repl.start().context.Matrix = module.default;
});