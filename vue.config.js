module.exports = {
    pages: {
      create: {
        entry: './src/pages/create/main.js',
        template: 'public/index.html'
      },
      read: {
        entry: './src/pages/read/main.js',
        template: 'public/index.html'
      },
      update: {
        entry: './src/pages/update/main.js',
        template: 'public/index.html'
      },  
      delete: {
        entry: './src/pages/delete/main.js',
        template: 'public/index.html'
      } 
    }
  }