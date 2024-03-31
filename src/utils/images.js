const importAll = (r) => r.keys().map(r);
const images = importAll(
 require.context("../assets", true, /\.(png|jpe?g|svg)$/)
);

export default images;