const path = require('path');

module.exports = {
  	entry: './src/app.js',
  	mode: 'production',
  	module: {
		  rules: [
		    {
		      test: /\.(js|jsx)$/,
		      exclude: /node_modules/,
		      use: ['babel-loader']
		    }
		  ]
		},
		resolve: {
		  extensions: ['*', '.js', '.jsx']
		},
  	output: {
    	path: path.resolve(__dirname, 'public/dist'),
    	filename: 'bundle.js'
  	},
  	externals: {
	  jquery: 'jQuery'
	}
};