# The Floo config file (`flooconfig.yml`)

This file contains a list of locations registered by the floo network system, this file is pretty delicate, as content here is loaded in a different way, be careful editing it by hand.
If you don't feel confident to make changes to the file directly (understandable), you can use the [`editfloolocation`]() command.

This is an example of the file with a floo location inside:

``` yaml
# ####################################
# # HPWizard Floo Powder config file #
# #          by: TheL0w3R            #
# ####################################

locations:
- ==: FlooLocation
  visibility: BOTH
  icon: STONE
  name: '&2&lTest location'
  description: 'This is a test location'
  location:
    ==: org.bukkit.Location
    world: world
    x: 826.6800553634685
    y: 31.0
    z: 1220.5491515268652
    pitch: 1.3496039
    yaw: -271.78812
```