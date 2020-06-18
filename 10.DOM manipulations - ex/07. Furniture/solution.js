function solve() {
  const generateBtn = document.querySelector('#exercise button');
  const furnitureTextArea = document.querySelector('#exercise textarea');
  const buyBtn = document.querySelector('#exercise > button:nth-child(6)');
  const buyedFurnitureTextArea = document.querySelector('#exercise > textarea:nth-child(5)');
  const furnitureData = document.getElementsByTagName('tr')
  generateBtn.addEventListener('click', generateFurniture);
  buyBtn.addEventListener('click', showBuyedFurniture);
  function showBuyedFurniture(e) {
    const markFurniture = Array.from(furnitureData).filter(el => {
      const input = el.lastElementChild.childNodes[1]
      if(input){
        return input.checked;
      }
    });
    let furnitureNames = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    if (markFurniture.length === 0) { return; }
    markFurniture.forEach(element => {
      const name = element.children[1].textContent.trim();
      const price = Number(element.children[2].textContent);
      const decF = Number(element.children[3].textContent);
      totalPrice += price;
      totalDecFactor += decF;
      furnitureNames.push(name);
    })
    const totalFurniture = furnitureNames.length;
    const averageDecF = totalDecFactor / totalFurniture;
    const result =
      `Bought furniture: ${furnitureNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecF}`;
    buyedFurnitureTextArea.textContent = result;

  }
  function generateFurniture(e) {

    const arrFurniture = JSON.parse(furnitureTextArea.value);
    const tbody = document.querySelector('.wrapper tbody');
    arrFurniture.forEach(element => {
      const { name, img, price, decFactor } = element;
      const html = ` <td><img src="${img}"></td><td><p>${name}</p></td><td><p>${price}</p></td><td><p>${decFactor}</p></td><td><input type="checkbox" /></td>`
      const row = createElements('tr');
      row.innerHTML = html;
      tbody.appendChild(row)
    });
  }
  function createElements(tag) {
    return document.createElement(tag);
  }

}