import { BuildEnvironmentVariables, BuildPaths } from "./configuration/build/types/configuration";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";

import path from "path";
import webpack from "webpack";

export default (env: BuildEnvironmentVariables) => {
  const PATHS: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    srcFolder: path.resolve(__dirname, "src"),
    publicFolder: path.resolve(__dirname, "public"),
  };

  const MODE = env.mode || "development";
  const IS_DEVELOPMENT = MODE === "development";

  const PORT = env.port || 3000;

  const webpackConfiguration: webpack.Configuration = buildWebpackConfiguration({
    mode: MODE,
    paths: PATHS,
    port: PORT,
    isDevelopment: IS_DEVELOPMENT,
  });

  return webpackConfiguration;
};
