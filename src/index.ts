import app from './app';
// dan
const port = 3000;

console.log('test');

app.listen(port, () => {
  console.log(`Server has started listining on port ${port}`);
});
