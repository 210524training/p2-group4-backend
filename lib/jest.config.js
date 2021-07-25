const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    globals: {
        'ts-jest': {},
    },
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    preset: 'ts-jest',
    restoreMocks: true,
};
export default config;
//# sourceMappingURL=jest.config.js.map