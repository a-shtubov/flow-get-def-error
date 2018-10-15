# Description

Example of flow-cli throwing an exception on the attempt of executing `get-def` command on `React` class component methods. For other variables or regular classes, that do not extend `React.Component`, `get-def` works correcty.

# Installing

`npm install`

# Running

`npm run get-def`

## Result

```
Failure("unexpected args passed to instantiate_poly_t: AnnotT")
Raised at file "pervasives.ml", line 32, characters 17-33
Called from file "src/typing/flow_js.ml", line 12031, characters 21-51
Called from file "src/typing/flow_js.ml", line 12198, characters 12-34
Called from file "src/typing/flow_js.ml", line 12138, characters 25-58
Called from file "src/typing/flow_js.ml", line 12199, characters 4-24
Called from file "src/server/command_handler/getDef_js.ml", line 108, characters 13-47
Called from file "src/server/command_handler/getDef_js.ml", line 174, characters 8-37
Called from file "src/server/command_handler/getDef_js.ml", line 203, characters 42-83
Called from file "src/core/lwt.ml", line 2101, characters 16-20
```
