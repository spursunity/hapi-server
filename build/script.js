/* eslint-disable no-undef */

const secoBtn = document.getElementById('seco');
const gecoBtn = document.getElementById('geco');

secoBtn.addEventListener('click', async () => {
  const response = await fetch('/seco');
  const data = await response.json();

  console.log('data :', data);
});

gecoBtn.addEventListener('click', async () => {
  const response = await fetch('/geco');
  const data = await response.json();

  console.log('data :', data);
});
