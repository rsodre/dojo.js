# Change Log

## 1.5.16

### Patch Changes

- 7d93332: fix: add sendSignedMessageBatch util

## 1.5.15

### Patch Changes

- 5b32060: fix: useTokens

## 1.5.14

### Patch Changes

- 9ee999e: fix: remove promise.all from batch

## 1.5.13

### Patch Changes

- afd1b66: chore: bump packages version
- afd1b66: bump: package version 2

## 1.5.12

### Patch Changes

- 5143b5e: fix: torii-wasm import from node-worker

## 1.5.11

### Patch Changes

- 1296ec1: fix: publish offchain messages

## 1.5.10

### Patch Changes

- 04cd161: chore: bump dojo.c to get latest publishMessage endpoint

## 1.5.9

### Patch Changes

- c8037ed: fix: removed \_hashedKey from subscription callback
- 1bbe42e: feat: add subscribeToken endpoint

## 1.5.8

### Patch Changes

- fd36752: fix: use starknet.shortstring.encodeShortString instead of torii-wasm equivalent

## 1.5.7

### Patch Changes

- e08880e: chore: bump dojo.c + fix node worker

## 1.5.6

### Patch Changes

- a36e92a: fix: recs update single component

## 1.5.5

### Patch Changes

- e1be67a: fix: recs getEventMessages looping

## 1.5.4

### Patch Changes

- f846b79: fix: pagination missing next_cursor

## 1.5.3

### Patch Changes

- recs

## 1.5.2

### Patch Changes

- updates

## 1.5.1

### Patch Changes

- 97aaa22: feat: Support torii pagination

## 1.5.0

### Minor Changes

- cb2f3ee: chore: bump dojo 1.5

## 1.4.4

### Patch Changes

- a4ed667: feat: torii-wasm nodejs support

## 1.4.3

### Patch Changes

- 624523b: feat: reset store

## 1.4.2

### Patch Changes

- ed933bc: feat: export intoEntityKeysClause
- 84585bc: fix: remove torii-client from core

## 1.4.1

### Patch Changes

- c3fd338: fix: bump all packages

## 1.4.0

### Minor Changes

- d908fdf: chore: bump dojo 1.4.0

## 1.3.1

### Patch Changes

- ff6eb12: chore: bump dojo 1.3.1

## 1.3.0

### Minor Changes

- 5e23a94: chore: bump upgrade to dojo 1.3

## 1.2.7

### Patch Changes

- 811ae57: fix: cairo option and enum ignore in zustand merge

## 1.2.6

### Patch Changes

- 7f48d18: fix: generateTypedData optimization

## 1.2.5

### Patch Changes

- fbc6a2e: fix: changing release workflow
- 691f1a3: fix: udpate package name + add build cache

## 1.2.4

### Patch Changes

- 28398be: fix: recs convertValues do not set to null

## 1.2.3

### Patch Changes

- b94f26d: fix: recs component matching

## 1.2.2

### Patch Changes

- d8a9b0d: fix: recs `setEntities` now updates component if component exists

## 1.2.1

### Patch Changes

- 1cd88c8: refactor sdk useEntityQuery,useEventQuery,useHistoricalEventsQuery
- e2a4ea5: fix: zustand updateEntity and mergeEntities deeply merge objects

## 1.2.0

### Minor Changes

- a9ccef3: feat: add reusable sdk react hooks

## 1.1.3

### Patch Changes

- a4fc8e4: fix: predeployed warnings

## 1.1.2

### Patch Changes

- 9af1969: chore: bump dojo v1.2.1. Add token_ids to sdk

## 1.1.1

### Patch Changes

- ded4be2: feat: remove field order and bump torii-client

## 1.1.0

### Minor Changes

- 27d0342: Default to ToriiQueryBuilder for queries with Clause

### Patch Changes

- 395e450: fix: createStore now fit to either vanilla or react store
- d030ace: fix: Add nested query test to match book + syntactic sugar

## 1.0.13

### Patch Changes

- 4fa350a: fix: createDojoStore have now proper types
- 257d02a: Fix historical events ordering

## 1.0.12

### Patch Changes

- b4dc1e2: parseEntities now returns Array<ParsedEntity<T>> instead of Record<string, ParsedEntity<T>>

## 1.0.11

### Patch Changes

- 5f335d0: Added experimental ToriiQueryBuilder and ClauseBuilder to be closer to how we should query ECS through torii

## 1.0.10

### Patch Changes

- 84dd776: Updated packages to latest dojo version // accept and convert array by @rsodre // add missing params for query and subscription by @rsodre // update starknet-core-version by @rsodre
- 42ab8cf: Add @dojoengine/sdk/state @dojoengine/sdk/react @dojoengine/sdk/sql // Moves hooks to sdk // Update examples

## 1.0.9

### Patch Changes

- 987fcb6: change from lerna to changeset

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.8](https://github.com/dojoengine/dojo.js/compare/v1.0.7...v1.0.8) (2025-01-06)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.7](https://github.com/dojoengine/dojo.js/compare/v1.0.6...v1.0.7) (2024-12-27)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.6](https://github.com/dojoengine/dojo.js/compare/v1.0.5...v1.0.6) (2024-12-23)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.4](https://github.com/dojoengine/dojo.js/compare/v1.0.4-alpha.3.1.2...v1.0.4) (2024-12-21)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.3](https://github.com/dojoengine/dojo.js/compare/v1.0.3-alpha.2...v1.0.3) (2024-12-14)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.2](https://github.com/dojoengine/dojo.js/compare/v1.0.1...v1.0.2) (2024-11-27)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [1.0.1](https://github.com/dojoengine/dojo.js/compare/v1.0.0...v1.0.1) (2024-11-26)

**Note:** Version bump only for package @dojoengine/utils-wasm

# [1.0.0](https://github.com/dojoengine/dojo.js/compare/v1.0.0-alpha.30...v1.0.0) (2024-11-11)

**Note:** Version bump only for package @dojoengine/utils-wasm

# [1.0.0-alpha.30](https://github.com/dojoengine/dojo.js/compare/v1.0.0-alpha.29...v1.0.0-alpha.30) (2024-11-09)

**Note:** Version bump only for package @dojoengine/utils-wasm

# [1.0.0-alpha.29](https://github.com/dojoengine/dojo.js/compare/v1.0.0-alpha.28...v1.0.0-alpha.29) (2024-11-08)

**Note:** Version bump only for package @dojoengine/utils-wasm

## 0.6.124 (2024-04-24)

**Note:** Version bump only for package @dojoengine/utils-wasm

## 0.6.123 (2024-04-24)

**Note:** Version bump only for package @dojoengine/utils-wasm

## [0.6.122](https://github.com/dojoengine/dojo.js/compare/v0.6.121...v0.6.122) (2024-04-09)

## [0.6.121](https://github.com/dojoengine/dojo.js/compare/v0.6.12...v0.6.121) (2024-04-07)

## [0.6.12](https://github.com/dojoengine/dojo.js/compare/v0.6.11...v0.6.12) (2024-04-05)

## [0.6.11](https://github.com/dojoengine/dojo.js/compare/v0.6.1...v0.6.11) (2024-04-05)

## [0.6.1](https://github.com/dojoengine/dojo.js/compare/v0.6.1-alpha.11...v0.6.1) (2024-04-04)

### Bug Fixes

- build and dep issues ([5358dbf](https://github.com/dojoengine/dojo.js/commit/5358dbfdd6fa73ae64e204d880c7791002800631))
- remove bunx ([2797d53](https://github.com/dojoengine/dojo.js/commit/2797d530c505709a9beebb59f33e1538c587e021))

## [0.6.1-alpha.1](https://github.com/dojoengine/dojo.js/compare/v0.6.0-alpha.5...v0.6.1-alpha.1) (2024-04-02)

# [0.6.0-alpha.5](https://github.com/dojoengine/dojo.js/compare/v0.6.0-alpha.2...v0.6.0-alpha.5) (2024-04-01)

## [0.6.1-alpha.0](https://github.com/dojoengine/dojo.js/compare/v0.6.0-alpha.0...v0.6.1-alpha.0) (2024-03-08)

# [0.6.0-alpha.0](https://github.com/dojoengine/dojo.js/compare/v0.5.9...v0.6.0-alpha.0) (2024-03-07)

### Bug Fixes

- remove types ([4f9787d](https://github.com/dojoengine/dojo.js/commit/4f9787d67c6a849cbd5713170f535904c640d23e))

## [0.5.9](https://github.com/dojoengine/dojo.js/compare/v0.5.8...v0.5.9) (2024-02-17)

## [0.5.8](https://github.com/dojoengine/dojo.js/compare/v0.5.7...v0.5.8) (2024-02-09)

## [0.5.7](https://github.com/dojoengine/dojo.js/compare/v0.5.6...v0.5.7) (2024-02-08)

## [0.5.6](https://github.com/dojoengine/dojo.js/compare/v0.5.5...v0.5.6) (2024-02-03)

### Bug Fixes

- ci lint ([285d094](https://github.com/dojoengine/dojo.js/commit/285d094116a0e777e6abde6b097aec725fa05ba9))

## [0.5.5](https://github.com/dojoengine/dojo.js/compare/v0.5.4...v0.5.5) (2024-02-01)

## [0.5.4](https://github.com/dojoengine/dojo.js/compare/v0.5.3...v0.5.4) (2024-02-01)

### Bug Fixes

- config other cleanup ([62429f5](https://github.com/dojoengine/dojo.js/commit/62429f513a21a9b788922ad37405e56bf12c178b))

### Features

- mod289 & permute + tests ([9cb9323](https://github.com/dojoengine/dojo.js/commit/9cb9323a8b5cc7f2c710633bf24434c30df8d6e3))
- recursive_s_noise ([6ad6194](https://github.com/dojoengine/dojo.js/commit/6ad6194c7397db01c373e91e5a28cd58fc43e6aa))
- step: function + tests ([ebc3569](https://github.com/dojoengine/dojo.js/commit/ebc3569de956101e659f5ee885ab989c50d760bc))
