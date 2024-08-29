const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardModule": "./src/app/dashboard/dashboard.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
