import repl = require('repl');

import('../src/matrix').then(module => {
    repl.start().context.Matrix = module.default;
});