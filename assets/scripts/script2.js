const calculate = document.querySelector('#calculate')
const display = document.querySelector('#display')

let result
calculate.addEventListener('click', (e) => {
  const element1 = document.querySelector('#element1').value
  const element2 = document.querySelector('#element2').value
  if (element1 === '') {
    alert('Please input two weights to balance')
  }
  if (element2 === '') {
    alert('Please input optional weights to select from for scale balancing')
  }
  const elementoneArr = element1.split(',').map(Number)
  const elementtwoArr = element2.split(',').map(Number)

  if (elementoneArr.length !== 2 || elementoneArr[0] === 0) {
    alert(
      'Weight added is less or more than two integers. Only two comma seperated weights can be added'
    )
  } else {
    // the scale balancing is processed by calling the balanceScale function
    const output = balanceScale(elementoneArr, elementtwoArr)
    display.innerHTML = result
  }
})


function balanceScale (elementone, elementtwo) {
  let balance = false
  const diff = elementone[1] - elementone[0]
  if (diff === 0) {
    result = 'scale is balanced'
    return result
  }

  for (let z = 0; z < elementtwo.length; z++) {
    if (elementtwo[z] === diff) {
      result = [elementtwo[z]]
      balance = true
      return result
    }
  }
  for (let i = 0; i < elementtwo.length; i++) {
    for (let j = 0; j < elementtwo.length; j++) {
      if (elementtwo[i] + elementtwo[j + 1] === diff) {
        result = [elementtwo[i], elementtwo[j + 1]]
        balance = true
      } else if (elementtwo[i] + diff === elementtwo[j + 1]) {
        result = [elementtwo[i], elementtwo[j + 1]]
        balance = true
      }
    }
  }
  return result
}
