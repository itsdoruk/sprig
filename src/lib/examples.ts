/*
First time using Sprig? Check out the toolkit in bottom left.

@title: 
@author: 
@tags: []
@img: ""
@addedOn: 2024-00-00
*/

const player = "p"

setLegend(
  [player, bitmap`
................
................
.......000......
.......020......
......0220......
......02220.0...
....0003230.0...
....0.0222000...
....0.05550.....
......02220.....
.....022220.....
.....02220......
......000.......
......0.0.......
.....00.00......
................`]
)

setSolids([])

let level = 0
const levels = [
  map`
p.
..`
]

setMap(levels[level])

setPushables({
  [player]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {

})
