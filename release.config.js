export default {
  branches: ["main", "next"],
  plugins: [
    [
      "@codedependant/semantic-release-docker",
      {
        dockerTags: ["latest", "{major}", "{major}.{minor}", "{major}.{minor}.{patch}"],
        dockerImage: "semantic-release-docker-reproduction",
        dockerRegistry: "ghcr.io",
        dockerProject: "liamederzeel",
        dockerArgs: {
          API_TOKEN: true,
          RELEASE_DATE: new Date().toISOString(),
          RELEASE_VERSION: "{next.version}",
        },
      },
    ],
  ],
};
