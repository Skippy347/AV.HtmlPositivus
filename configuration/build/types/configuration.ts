export type BuildMode = "development" | "production";

export interface BuildPaths {
  build: string;
  html: string;
  entry: string;
  srcFolder: string;
  publicFolder: string;
}

export interface BuildEnvironmentVariables {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;

  isDevelopment: boolean;
}
