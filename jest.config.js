module.exports ={
  "verbose": true,
  "testEnvironment": "jsdom",
  "preset":"ts-jest",
  "setupFilesAfterEnv": ["<rootDir>/tests/setupTests.ts"],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy"
  }
}
  
