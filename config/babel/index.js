module.exports = {
  targets: {
    esmodules: true,
  },
  assumptions: {
    setPublicClassFields: true,
  },
  presets: [
    ['@babel/preset-env', {targets: 'last 2 major versions'}],
    ['@babel/preset-react', {runtime: 'automatic'}],
    ['@babel/preset-typescript'],
  ],
}
