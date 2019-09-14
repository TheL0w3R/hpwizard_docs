# The Spells config file (`spellconfig.yml`)

This file holds every customizable aspect of every spell in the plugin, a lot of these properties are shared between spells, the best way to learn this is by changing the values and reloading the plugin.

Here's the default generated file:

``` yaml
# ##################################
# #     HPWizard spell config      #
# #         by: TheL0w3R           #
# ##################################

accio:
  attract_range: 10.0
  sound: ui.button.click
  name: Accio
  description: Makes objects come to you
aguamenti:
  sound: block.note_block.harp
  check_region_permission: true
  name: Aguamenti
  description: Spawns a block of water at the target location
  range: 20.0
alarteascendare:
  duration: 3
  levitation_amplifier: 2
  sound: block.note_block.hat
  name: Alarte Ascendare
  description: Launches the target entity up into the air
  range: 20.0
  entity_detection_radius: 0.5
alohomora:
  sound: ui.button.click
  check_region_permission: true
  name: Alohomora
  description: Opens doors, trapdoors, pressure plates etc
  range: 40.0
apparate:
  sound: block.note_block.pling
  menu_title: '&9&lApparate Traveler'
  name: Apparate
  description: Teleports you instantly to the wanted locatio
araniaexumai:
  sound: block.note_block.harp
  name: Arania Exumai
  description: Kills the target spider or cave spider
  range: 40.0
  entity_detection_radius: 0.5
arestomomentum:
  duration: 300
  sound: block.note_block.harp
  name: Aresto Momentum
  description: Slows down your falling speed
avadakedavra:
  sound: block.note_block.bass
  name: Avada Kedavra
  description: Instantly kills the entity you're looking at
  range: 10.0
  entity_detection_radius: 0.5
bombarda:
  explosion_power: 4.0
  explosion_breaks_blocks: true
  sound: none
  check_region_permission: true
  name: Bombarda
  description: Summons an explosion at the target block
  range: 40.0
  explosion_spread_fire: true
confundus:
  duration: 15
  sound: block.note_block.basedrum
  name: Confundus
  description: Confuses the target for a limited period of time
  range: 20.0
  effect_amplifier: 255
  entity_detection_radius: 0.5
crucio:
  duration: 7
  poison_amplifier: 255
  sound: block.note_block.harp
  name: Crucio
  description: Causes agonising pain to the target
  range: 10.0
  entity_detection_radius: 0.5
episkey:
  health_increase: 5.0
  sound: block.note_block.hat
  name: Episkey
  description: Heals and feeds yourself
  feed_increase: 2
evanesco:
  duration: 150
  sound: block.note_block.snare
  name: Evanesco
  description: Disappear for a limited period of time
expectopatronum:
  dementor_mob: ENDERMAN
  sound: block.note_block.hat
  name: Expecto Patronum
  description: Protects you against dementors by repelling them
  range: 40.0
  enable_dementor_killing: false
  entity_detection_radius: 0.5
expelliarmus:
  sound: block.note_block.snare
  name: Expelliarmus
  description: Disarms your opponent
  range: 20.0
  entity_detection_radius: 0.5
finiteincantatem:
  sound: block.note_block.hat
  name: Finite Incantatem
  description: Removes all negative effects from you
  effects_to_clear:
  - UNLUCK
  - BLINDNESS
  - POISON
  - GLOWING
  - HUNGER
  - LEVITATION
  - SLOW_DIGGING
  - CONFUSION
  - SLOW
  - WITHER
  - WEAKNESS
flipendo:
  damage: 1.0
  sound: block.note_block.harp
  name: Flipendo
  description: Slightly damage the target
  range: 20.0
  entity_detection_radius: 0.5
glacius:
  affecting_block_radius: 3
  sound: block.note_block.harp
  check_region_permission: true
  name: Glacius
  description: Freezes water and extinguishes fire
  range: 40.0
herbivicus:
  sound: block.note_block.hat
  name: Herbivicus
  description: Makes crops and plants grow instantly
homenumrevelio:
  duration: 15
  sound: block.note_block.hat
  name: Homenum Revelio
  description: Reveals the entities around the target point
  entity_detection_radius: 10
immobulus:
  duration: 15
  sound: block.note_block.hat
  name: Immobulus
  description: Immobilizes the target player
  range: 40.0
  slowness_amplifier: 6
  entity_detection_radius: 0.5
imperio:
  duration: 15
  sound: block.note_block.harp
  name: Imperio
  control_distance: 10.0
  description: Places the target under your control
  range: 20.0
  entity_detection_radius: 0.5
incendio:
  duration: 10
  sound: block.note_block.hat
  name: Incendio
  description: Sets the target entity on fire
  range: 20.0
  entity_detection_radius: 0.5
lumos:
  duration: 300
  sound: block.note_block.hat
  name: Lumos
  description: Lights up your wand for a limited period of time
  effect_amplifier: 255
morsmordre:
  fireworks_amount: 7
  sound: entity.lightning_bolt.impact
  name: Morsmordre
  description: Conjures the dark mark
  play_lightning: true
nox:
  duration: 12
  sound: block.note_block.hat
  name: Nox
  description: Blinds the target entity for a limited period of time
  range: 20.0
  effect_amplifier: 255
  entity_detection_radius: 0.5
peregrinorum:
  duration: 300
  sound: entity.ghast.shoot
  name: Peregrinorum
  description: Starts traveling in smoke form
periculum:
  fireworks_amount: 7
  sound: block.note_block.hat
  name: Periculum
  description: Launches red sparks at the sky
reducto:
  explosion_power: 0.5
  explosion_breaks_blocks: false
  sound: none
  check_region_permission: true
  name: Reducto
  description: Summons an explosion at the target block
  range: 10.0
reparo:
  sound: block.anvil.use
  name: Reparo
  description: Repairs all damaged items in your inventory
  damage_reduce_percent: 50.0
sectumsempra:
  duration: 10
  sound: block.note_block.harp
  name: Sectumsempra
  description: Slices and maims the target
  range: 20.0
  effect_amplifier: 255
  entity_detection_radius: 0.5
serpensortia:
  snake_custom_name: '&2&lSnake'
  snake_entity: SILVERFISH
  sound: block.note_block.harp
  snake_health: 40.0
  check_region_permission: true
  name: Serpensortia
  description: Summons a snake at the target location
  range: 40.0
stupefy:
  push_force: 2.0
  sound: block.note_block.harp
  name: Stupefy
  description: Stuns the target entity
  range: 20.0
  entity_detection_radius: 0.5
wingardiumleviosa:
  duration: 20
  sound: block.note_block.harp
  name: Wingardium Leviosa
  control_distance: 10.0
  description: Makes the target object levitate
  range: 10.0
  entity_detection_radius: 0.5
protego:
  duration: 10
  sound: block.anvil.land
  name: Protego
  description: If active, protects you against the next spell
```
