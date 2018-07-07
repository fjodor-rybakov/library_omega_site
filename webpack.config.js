const path = require('path');

module.exports = {
  	entry: './src/app.js',
  	mode: 'production',
  	module: {
		  rules: [
		    {
		      test: /\.(js|jsx)$/,
		      exclude: /node_modules/,
				loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

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