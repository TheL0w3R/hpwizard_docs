# The language file (`language.yml`)

This file holds almost all the messages that can be translated. Words that start and ends with a `%` are placeholders for dinamic values, they'll be replaced dinamically on runtime.

You can use [color codes](http://minecraft.tools/en/color-code.php) as well.

This is the default content:

``` yaml
# ##################################
# #    HPWizard message config     #
# #         by: TheL0w3R           #
# ##################################

commands:
  general:
    doesnotexist: '&cThis command doesn''t exists!'
    notplayer: '&cThis command can only be used by a player!'
    nopermissions: '&cYou don''t have permissions to use this command!'
    badargs: '&cCorrect usage: %usage%'
    unknown_spell: '&cThe specified spell doesn''t exists.'
    invalid_house: '&cThe specified house is not valid!'
    invalid_number: '&cThe specified number is not valid!'
    player_not_found: '&cThat player doesn''t exists!'
    broom_doesnt_exists: '&cThe specified broom doesn''t exists!'
    wand_doesnt_exists: '&cThe specified wand doesn''t exists!'
    floo_location_doesnt_exists: '&cThe specified floo location doesn''t exists!'
  teach:
    title_allspells: '&bYou learned all the spells!'
    unknown_error: '&cThere was an error trying to teach the spell.'
    subtitle_allspells: '&7That''s awesome!!'
    player_already_knows: '&c%player% already knows that spell.'
    notify_allspells: '&2You learned all the spells!!'
    success: '&2You taught "%player%" the spell "%spell%".'
    subtitle: '&7Congrats!!'
    success_allspells: '&2You taught "%player%" all the spells!'
    title: '&bYou learned %spell%!'
    notify: '&2You learned the spell %spell%!'
  forget:
    title_allspells: '&cYou forgot all the spells!'
    unknown_error: '&cThere was an error trying to remove the spell.'
    player_doesnt_knows: '&c%player% doesn''t know that spell.'
    subtitle_allspells: '&7This is so sad...'
    notify_allspells: '&2You forgot all the spells!'
    success: '&2You made "%player%" forget the spell "%spell%".'
    subtitle: '&7What a shame...'
    success_allspells: '&2You made "%player%" forget all the spells!'
    title: '&cYou forgot %spell%'
    notify: '&2You forgot the spell "%spell%"!'
  createwand:
    success: '&2The wand "%wandname%" has been created succesfully!'
  editwand:
    success: '&2The wand "%wandname%" has been updated!'
  deletewand:
    success: '&2The wand "%wandname%" has been successfully deleted!'
  getwand:
    notify_target: '&2You was given a wand by "%player%"'
    success: '&2You gave "%player%" a wand!'
    self: '&2You got a wand!'
    no_wands: '&cThere isn''t any wand. To create a wand use "/hpw createwand"'
    wand_doesnt_exists: '&cThis wand doesn''t exists!'
  removepoints:
    success: '&c-%X% points for %house%&c...'
  addpoints:
    success: '&2+%X% points for %house%&2!'
  setpointsmeter:
    success: '&2The point meter for %house% hat has been set to X: %X% Y: %Y% Z: %Z%'
  sort:
    success: '&2The player "%player%" has been sorted into "%house%"!'
  sethatlocation:
    success: '&2The sorting hat has been set to X: %X% Y: %Y% Z: %Z%'
  sethousefireworks:
    success: '&2The winning house''s firework location has been set successfully!'
  sethousetrophy:
    success: '&2The winning house''s trophy location has been set successfully!'
  setfloolocation:
    success: '&2You''ve set a floo location named "%name%" at X: %X% Y: %Y% Z: %Z%!'
    already_exists: '&cThe location name you specified is already registered!'
  editfloolocation:
    success: '&2The floo location named "%name%" has been updated!'
  deletefloolocation:
    success: '&2The floo location named "%flooname%" has been successfully deleted!'
  getfloopowder:
    notify_target: '&2You was given %#% floo powder by %player%!'
    success: '&2You gave %player% %#% floo powder!'
    self: '&2You got %#% floo powder items!'
  createbroom:
    success: '&2The broom "%broomname%" has been created succesfully!'
  editbroom:
    success: '&2The broom "%broomname%" has been updated!'
  deletebroom:
    success: '&2The broom "%broomname%" has been successfully deleted!'
  getbroom:
    notify_target: '&2You was given a broom by "%player%"'
    success: '&2You gave "%player%" a broom!'
    self: '&2You got a broom!'
    no_brooms: '&cThere isn''t any broom. To create a broom use "/hpw createbroom"'
    broom_doesnt_exists: '&cThis broom doesn''t exists!'
  reload:
    success: '&9The plugin has been reloaded successfully!'
  export:
    success: '&2Data successfully exported! Generated file: %filepath%'
  import:
    file_doesnt_exists: '&cCould not find the specified file!'
    success: '&2All data has been imported successfully!'
sortinghat:
  standard: '&9Hmmm... What shall I do with you...'
  gryffindor: '&9Plenty of courage I see. Looks like you have a huge desire for fame.'
  hufflepuff: '&9It looks like you love plants and the outdoors. You also seem to
    not be a risk taker.'
  ravenclaw: '&9You seem to love to read. Looks like you are also very open minded.'
  slytherin: '&9Doesn''t look like you follow the rules. Looks like you also take
    lots of risks.'
  decision: '&9I shall put you in %house%&9!'
  broadcast: '&9The Sorting Hat has decided to sort &2%player%&9 in %house%&9!'
wands:
  wood_text: '&7Wood'
  core_text: '&7Core'
  default_wand_color: '&9'
  default_spell_color: '&2'
floo:
  menu_title: '&2&lFloo Traveler'
  item_title: '&2Floo Powder'
  item_description:
  - '&7Silver powder used by witches and'
  - '&7wizards to travel through the Floo Network.'
  travel: '&9Traveling to &2%location%&9.'
spells:
  properties:
    description: Description
    range: Range
  select: '&9Selected %spell%'
  forbidden: '&cThe use of wands is forbidden here!'
  cast: '&6You casted %spell%!'
  cooldown: '&c%spell% is on cooldown, %cooldown% seconds left.'
  unforgivables:
    avadakedavra: '&8&l%caster% &4&lcasted the unforgivable spell &2&lAvada Kedavra
      &4&lon &7&l%victim%'
    crucio: '&8&l%caster% &4&lcasted the unforgivable spell &c&lCrucio &4&lon &7&l%victim%'
    imperio: '&8&l%caster% &4&lcasted the unforgivable spell &6&lImperio &4&lon &7&l%victim%'
  evanesco:
    status_invisible: '&2You''re now invisible! Anyone is able to see you.'
    status_visible: '&2You''re now visible! Everyone can see you.'
  apparate:
    menu_title: '&9&lApparate Traveler.'
    teleporting: '&2Traveling to %location%'
  wingardiumleviosa:
    status_controlling: '&2You''re now controlling a %entityname%'
    status_not_controlling: '&2You''re no longer using Wingardium Leviosa'
  imperio:
    status_controlling: '&2You''re now controlling %playername%'
    status_not_controlling: '&2You''re no longer using Imperio'
  metafors:
    status_disguised: '&2You''re now disguised as %mobname%'
    status_not_disguised: '&2You''re no longer disguised'
brooms:
  forbidden: '&cBrooms are forbidden here!'
  start: '&3You''re now flying on your &b&o%broomname%'
  stop: '&3You stopped flying.'
  info: '&3Right click air with your broom in your main hand to start flying!'
  menu_title: '&l&6Broom Menu'
  speeds:
    select: '&3You''ve selected the speed %speed%'
    menu_options:
      floating:
        title: '&7&lFloating'
        description: Stops your broom,completely.
      veryslow:
        title: '&a&lVery Slow'
        description: Sets your broom speed to|the 7% of it's maximum speed.
      slow:
        title: '&2&lSlow'
        description: Sets your broom speed to|the 14% of it's maximum speed.
      midslow:
        title: '&3&lMid Slow'
        description: Sets your broom speed to|the 28% of it's maximum speed.
      medium:
        title: '&9&lMedium'
        description: Sets your broom speed to|the 42% of it's maximum speed.
      midfast:
        title: '&e&lMid Fast'
        description: Sets your broom speed to|the 56% of it's maximum speed.
      fast:
        title: '&6&lFast'
        description: Sets your broom speed to|the 70% of it's maximum speed.
      veryfast:
        title: '&c&lVery Fast'
        description: Sets your broom speed to|the 84% of it's maximum speed.
      maximum:
        title: '&4&lMaximum'
        description: Sets your broom speed to|the 100% of it's maximum speed.
```

## Command translations

Under the `commands` entry, they're messages used by the plugin commands. Each command has it's own messages under it's own entry, change them to your liking!

## Sorting Hat messages

Messages used by the automatic sorting proccess, they can be located under the `sortinghat` entry, they'll be triggered when a Muggle walks to the Sorting Hat location, more information on the Sorting Hat tutorial.