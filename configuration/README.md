---
sidebarDepth: 4
---

# The main config file (`config.yml`)

This file holds the general configuration options for the plugin.

This is the default config file:

``` yaml
# ##################################
# #      HPWizard config file      #
# #          by: TheL0w3R          #
# ##################################

general:
  debug: false
  plugin_prefix: '&8[&6HPWizard&8]&f '
  enable_mysql: false
  modules:
    enable_house_system: true
    enable_spell_system: true
    enable_broom_system: true
    enable_floo_system: true
mysql:
  host: localhost
  port: '3306'
  user: my_user
  pass: my_password
  db: my_database
items:
  floo_powder_item: BLAZE_POWDER
  floo_item_glow: false
  wand_item_glow: false
  broom_item_glow: false
spells:
  bypass_op: false
  bypass_citizens_npcs: true
```

## General settings

### debug

Enables the debug mode, it will print detailed information to the console, useful when submitting a bug.

### plugin\_prefix

It's the prefix for every message the plugin sends to the players, also, you can use [color codes](http://minecraft.tools/en/color-code.php).

### enable\_mysql

If true, switches to MySQL as the storage system for holding wizard data, if false, YAML files will be used.

### modules

These are all the plugin modules, you can enable and disable them by setting each entry either `true` or `false`.

## MySQL settings

These settings are located under the `mysql` entry. They're properties for connecting to the MySQL database.

::: tip 
If [enable_mysql](/configuration/#enable-mysql) is `false`, you can ignore this.
:::

### host

The address of the server hosting the database.

### port

The port where MySQL is listening.

### user

The database user.

### pass

The password for the specified user.

### db

The database name, where the plugin will create all the tables (prefixed with `hpw_`).

## Item settings

Under `items`, these settings allow for general item customization, (like enabling or disabling glowing).

### floo\_powder\_item

The item used as the floo powder.

### floo\_item\_glow

If true, all generated floo items will have a glowing aspect, like they were enchanted.

### wand\_item\_glow

If true, all generated wand items will have a glowing aspect, like they were enchanted.

### broom\_item\_glow

If true, all generated broom items will have a glowing aspect, like they were enchanted.

## Spell settings

These are some general spell behaviour options.

### bypass\_op

If true, spells won't affect Operators.

### bypass\_citizens\_npcs

If true, spells won't affect Citizens NPCs.