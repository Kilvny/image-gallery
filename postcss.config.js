const tailwindcss = require('tailwindcss')

// module.exports = {
//     plugins:[
//         tailwindcss('./tailwind.js'), // the directory of the config file we created 
//         require('autoprefixer')
//     ],
//     content: ['./src/App.js'],
// }

module.exports = {
    plugins:[
        tailwindcss('./tailwind.js'), // the directory of the config file we created 
        require('autoprefixer')
    ],
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './public/**/*.html',
        './public/**/*.js'
      ],
      theme: {
        extend: {},
      },
      
    // ...
  }
