const battles = require('./battle')

function analytica(){
function mapper(arr, checker) {
    var result = arr.map(battle => {
        return battle[checker]
    }).filter(result => {
        return result != null
    })
  return  result.reduce(most_active)
  
}
function most_active(most_active, current, i, arr) {
    return arr.filter(person => person === most_active).length >= arr.filter(person => person === current).length ? most_active : current
}
 

//mostactive
var battles_name = battles.map(battle => battle.name)
var most_active_name = battles_name.reduce(most_active)
var most_active_attacker_king = mapper(battles,"attacker_king")
var most_active_defender_king = mapper(battles,"defender_king")
var most_active_region = mapper(battles,"region")

//attacker outcome
var attacker_outcomes_wins = battles.map((battle) => {
    return battle.attacker_outcome
}).filter(attacker_outcome => {
    return attacker_outcome == "win"
}).length

var attacker_outcomes_loss = battles.map((battle) => {
    return battle.attacker_outcome
}).filter(attacker_outcome => {
    return attacker_outcome == "loss"
}).length

// var attacker_outcomes_no = battles.map((battle) => {
//     return battle.attacker_outcome
// }).filter(attacker_outcome => {
//     return attacker_outcome == ""
// }).length


//battle_types
var battle_types = new Set(battles.map(battle => {
    return battle.battle_type
    })
    .filter(battle=>{
        return battle!=''
    })
);

//defender size
var defender_size_total = battles.map(battle => {
    return battle.defender_size
}).filter(defender_size => {
 
    return defender_size !=null
})

var defender_size_sum = defender_size_total.reduce(Sum);
function Sum(sum, item) {
    return sum + item
}

var defender_size_avg = defender_size_sum / battles.length

var defender_size_min = Math.min(...defender_size_total)
var defender_size_max = Math.max(...defender_size_total)

//most active final data
var most_active_data = {
    attacker_king: most_active_attacker_king,
    defender_king: most_active_defender_king,
    region: most_active_region,
    name: most_active_name
}

//attacker_outcome final data
var attacker_outcome = {
    win: attacker_outcomes_wins,
    loss: attacker_outcomes_loss
}

//battle_types final data
var battle_type = Array.from(battle_types)

//defender size final data
var defender_size = {
    average: defender_size_avg,
    min: defender_size_min,
    max: defender_size_max

}

//final result
var result = {
    most_active_data,
    attacker_outcome,
    battle_type,
    defender_size

}

console.log(result)
return result
}

module.exports={
    analytica
}

