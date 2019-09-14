---
sidebarDepth: 4
---

# The House config file (`houseconfig.yml`)

This file holds configuration related to the house system, you can configure everything related to:

- House points
- House cups
- Sorting hat
- House trophy
- Points meter
- Point signs

And so much more!

Let's start by taking a look at the default generated file:

``` yaml
# ##################################
# #      HPWizard houses file      #
# #          by: TheL0w3R          #
# ##################################

general:
  points_meter_height: 5
  on_win:
    send_titles: true
    send_broadcast_titles: true
    send_chat_messages: true
    send_broadcast_chat_messages: true
    spawn_general_fireworks: true
    spawn_individual_fireworks: true
    play_sound: true
  hogwarts:
    points_threshold: 4000
    last_winner: none
    on_win:
      messages:
        player: '%housecolor%Congratulations! You won the House Cup!'
        broadcast: '%housecolor%%house% won the House Cup!'
      titles:
        player: '%housecolor%CONGRATS!'
        broadcast: '%housecolor%%house%!'
      subtitles:
        player: '&7Your house won the House Cup!'
        broadcast: '&7Has won the House Cup!'
      sound: entity.player.levelup
    fireworks_location: none
    trophy_location: none
  ministry:
    points_threshold: 1000
    last_winner: none
    on_win:
      messages:
        player: '%housecolor%Congratulations! You won the Ministry Cup!'
        broadcast: '%housecolor%%house% won the Ministry Cup!'
      titles:
        player: '%housecolor%CONGRATS!'
        broadcast: '%housecolor%%house%!'
      subtitles:
        player: '&7Your team has won the Minsitry Cup!'
        broadcast: '&7Has won the Ministry Cup!'
      sound: entity.player.levelup
    fireworks_location: none
    trophy_location: none
sorting_hat:
  location: none
  detection_radius: 1.5
  detection_delay: 0
  detection_period: 40
  messages:
    standard: '&9Hmmm... What shall I do with you...'
    gryffindor: '&9Plenty of courage I see. Looks like you have a huge desire for
      fame.'
    hufflepuff: '&9It looks like you love plants and the outdoors. You also seem to
      not be a risk taker.'
    ravenclaw: '&9You seem to love to read. Looks like you are also very open minded.'
    slytherin: '&9Doesn''t look like you follow the rules. Looks like you also take
      lots of risks.'
    decision: '&9I shall put you in %house%&9!'
    broadcast: '&9The Sorting Hat has decided to sort &2%player%&9 in %house%&9!'
houses:
  ravenclaw:
    custom_name: Ravenclaw
    color: BLUE
    points: 0
    points_meter:
      location: none
      filled_block: BLUE_STAINED_GLASS
      empty_block: GLASS
    trophy_block: BLUE_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% ravenclaw
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&9&lPoints for'
      - '&9&lRavenclaw'
      - '&9&l%points%'
      - ''
  hufflepuff:
    custom_name: Hufflepuff
    color: YELLOW
    points: 0
    points_meter:
      location: none
      filled_block: YELLOW_STAINED_GLASS
      empty_block: GLASS
    trophy_block: YELLOW_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% hufflepuff
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&e&lPoints for'
      - '&e&lHufflepuff'
      - '&e&l%points%'
      - ''
  gryffindor:
    custom_name: Gryffindor
    color: RED
    points: 0
    points_meter:
      location: none
      filled_block: RED_STAINED_GLASS
      empty_block: GLASS
    trophy_block: RED_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% gryffindor
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&c&lPoints for'
      - '&c&lGryffindor'
      - '&c&l%points%'
      - ''
  slytherin:
    custom_name: Slytherin
    color: GREEN
    points: 0
    points_meter:
      location: none
      filled_block: LIME_STAINED_GLASS
      empty_block: GLASS
    trophy_block: LIME_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% slytherin
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&a&lPoints for'
      - '&a&lSlytherin'
      - '&a&l%points%'
      - ''
  muggle:
    custom_name: Muggle
    color: GRAY
  auror:
    custom_name: Auror
    color: DARK_PURPLE
    points: 0
    points_meter:
      location: none
      filled_block: PURPLE_STAINED_GLASS
      empty_block: GLASS
    trophy_block: PURPLE_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% auror
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&5&lPoints for'
      - '&5&lAuror'
      - '&5&l%points%'
      - ''
  deatheater:
    custom_name: DeathEater
    color: DARK_GREEN
    points: 0
    points_meter:
      location: none
      filled_block: GREEN_STAINED_GLASS
      empty_block: GLASS
    trophy_block: GREEN_STAINED_GLASS
    sorting_hat_commands:
    - pex group add %player% deatheater
    on_win_commands:
    - give %player% diamond 64
    signs:
      locations: []
      sign_data:
      - '&2&lPoints for'
      - '&2&lDeathEater'
      - '&2&l%points%'
      - ''
```

## General settings

### points\_meter\_height

Sets the height (in blocks) of the point meters.

### on\_win

Here, you can enable and disable the features that will be used when a house wins its cup.

### hogwarts/ministry

Config entries for the Hogwarts (Gryffindor, Slytherin, Ravenclaw and Hufflepuff houses) or Ministry cup (Auror and Death Eater houses).

#### points\_threshold

The point goal for the cup to declare a winner (the first Hogwarts house to reach this number of points will win the cup).

#### on\_win

Messages, titles and subtitles and sound sent to the players when a house of this cup wins (if they're enabled in the `general.on_win` entry)

#### fireworks\_location

The location where the fireworks will spawn when a house of this cups wins.

#### trophy\_location

The location where the trophy block will be placed when a house of this cups wins.

## Sorting Hat settings

Settings for the sorting hat system.

### location

The location where the sorting hat player detection will happen.

### detection\_radius

The radius (in blocks) around the location previously set where players will be detected if they walk in.

### detection\_delay

The time (in ticks) where the player detection will start happening.

### detection\_period

The time (in ticks) between each message sent by the sorting hat to the player when detection starts.

### messages

All the messages sent to the player by the sorting hat system.

## Per-House settings

Each house has it's own entry below `houses`, all entries are exactly the same, I'll explain it once but it applies to all houses.

### custom\_name

The name of the house that will be visible for everyone on the server.

### color

The color of the house.

### points

The points the house currently has.

### points\_meter

The points meter config, you can set the location and blocks.

### trophy\_block

The block that will be placed at the trophy location (if set) when the house wins.

### sorting\_hat\_commands

A list of commands that will be executed when a player is sorted to this specific house (by the sorting hat system or the plugin command).

### on\_win\_commands

A list of commands that will be executed for every player in this specific house when it wins the cup.

### signs

Everything related to house signs:

- A list of locations where signs for this specific house have been placed.
- The content of the sign that will be written on every sign placed for this house.