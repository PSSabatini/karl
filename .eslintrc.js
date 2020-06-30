module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      'max-len': ['error', {
        code: 120,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
      }],
      'prefer-destructuring': ['error', {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      }, {
        enforceForRenamedProperties: false,
      }],
      'no-unused-vars': ['error', {
        args: 'all',
        caughtErrors: 'all',
      }],
      'no-plusplus': ['error', {
        allowForLoopAfterthoughts: true,
      }],
      'no-underscore-dangle': ['error', {
        allow: ['_id'],
      }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      }],
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };