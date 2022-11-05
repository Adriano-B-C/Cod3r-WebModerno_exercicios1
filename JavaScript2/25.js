// CERTO


const buscarPalavraSemelhante = (palavra, semelhantes) => semelhantes.filter(e => (e.includes(`${palavra}`)))

console.log(buscarPalavraSemelhante('a', ['buscar', 'palavras', 'é', 'facil']))
console.log(buscarPalavraSemelhante('pro', ['programação', 'mobile', 'profissinal']))
console.log(buscarPalavraSemelhante('python', ['JavaScript', 'Java', 'C++']))
console.log(buscarPalavraSemelhante('a', ['ABC']))