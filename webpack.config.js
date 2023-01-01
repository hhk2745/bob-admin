const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경
  mode: 'development',

  // 애플리케이션 시작 경로
  entry: './src/index.js',

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },

  // 번들된 파일 경로
  output: {
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: [
              "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }
        },
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },{
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },{
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],

  // 개발 서버 설정
  devServer: {
    host: 'localhost',
    port: port,
    open: true, // open page when start
    historyApiFallback: true,
  },
};