// eslint-disable-next-line no-undef
module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/presentation/**",
    "!src/**/stories.tsx",
    "!src/pages/**/*.tsx",
    "!src/main/**/*.ts",
    "!types/*.d.ts",
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
