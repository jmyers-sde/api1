let url = 'https://pokeapi.co/api/v2/pokemon/charizard'

fetch(url)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        let myArr = {
            name: json.species.name,
            stats: json.stats.map(detailedStats => {
                return {
                    name: detailedStats.stat.name,
                    base: detailedStats.base_stat
                }
            })
        }
        pokemonInfo(myArr)
    })

function pokemonInfo(pokeData) {
    let name = document.getElementById('name')
    name.innerText = pokeData.name

    let baseStats = document.getElementById('baseStats')
    pokeData.stats.map(stats => {
        let statName = document.createElement('tr')
        let statNumber = document.createElement('td')
        statName.innerText = stats.name.toUpperCase()
        statNumber.innerText = stats.base
        baseStats.appendChild(statName)
        statName.appendChild(statNumber)
    })
}