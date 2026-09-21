# Parallax Slider Block — Compatibility Report

- Plugin: `parallax-slider-block` (1.2.7 → **1.2.8**)
- Branch: `dev` @ `a86c510` (same commit as `latest`)
- Date: 2026-09-21
- Nothing committed or pushed.

## 1. Detected original PHP / WP

| | Detected | Evidence |
|---|---|---|
| PHP | **5.6** | `font-loader.php:21,23` variadics `...$args`; short arrays and closures throughout; no 7.0+ syntax (`??`, return types, `fn`, typed props). `str_contains()` (PHP 8.0) is used, but WordPress polyfills it from WP 5.9. |
| WP | **5.8** | `register_block_type()` gets a block.json *directory path* (`parallax-slider-block.php:97` via `helpers.php:83-90`), which needs WP 5.8. `resolve_block_template()` (style-handler) is 5.8. `str_contains` on PHP < 8 relies on the WP 5.9 polyfill. |
| Declared | `Requires at least: 5.6`, `Tested up to: 6.5`, no `Requires PHP` (readme only; the plugin header had none) | **Disagrees with the code.** On WP 5.6–5.7 the helper passes a path to `register_block_type()`, which those versions treat as an invalid block name. |

## 2. Chosen floor

- PHP: max(5.6, 7.4 policy) = **7.4**. Policy won.
- WP: max(5.8, 6.0 policy) = **6.0**. Policy won.
- No user override.

## 3. Target range

- **PHP 7.4 → 8.5** (checklist: 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5)
- **WP 6.0 → 7.1** (checklist: 6.0, 6.1 … 6.9, 7.0, 7.1)
- Latest stable versions, checked 2026-09-21: PHP **8.5.10** (php.net releases JSON; supported branches 8.2–8.5) and WordPress **7.1.1** (api.wordpress.org version-check).

## 4. Issues

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `parallax-slider-block.php:26` | Unconditional `require_once` of `lib/style-handler/style-handler.php`, which lives in a git submodule. In a fresh clone without `git submodule update --init` the file is missing and the plugin fatals. | all | Critical |
| 2 | `block.json` | No `apiVersion`, so it defaults to v1, while `src/edit.js` / `src/save.js` use `useBlockProps`. WP 6.9+/7.x warns about v1 blocks, and WP 7.1 always iframes the post editor. | WP 6.9+ / 7.x | High |
| 3 | `includes/helpers.php:50` | `include_once` of `dist/modules.asset.php` returns `true` on a repeat call, so `$controls_dependencies['dependencies']` is null and `array_merge()` throws a TypeError. | PHP 8.0+ | Medium |
| 4 | `includes/font-loader.php:70` | A block attribute value is used as an array key. A `null` value triggers the PHP 8.5 "null as array offset" deprecation, then `trim(null)` at `:97` triggers an 8.1 deprecation. An array value causes a fatal `TypeError` (verified). | PHP 8.1 / 8.5 (null), 8.0+ (array) | Medium |
| 5 | `includes/helpers.php:74` → `dist/modules.css` | Enqueued on `admin_enqueue_scripts`, and it contains 7 `.wp-block…` selectors. WP 7.1 always iframes the editor, so canvas-targeted rules may not reach the iframe. | WP 7.1 | Medium |
| 6 | `parallax-slider-block.php` | No `ABSPATH` guard. | all | Low |
| 7 | `includes/helpers.php:60` | `'eb_wp_version' => (float) get_bloginfo('version')` is sent to JS. A future `x.10` release would collapse to `x.1`. The only consumer (`dist/modules.js`) checks `>= 5.8`, which stays correct. | future x.10 | Low |
| 8 | `includes/helpers.php:85` | `(float) get_bloginfo('version') <= 5.6` is a float version compare, and the branch is dead at a 6.0 floor (see §5). | — | Low |
| 9 | header / `readme.txt` | Wrong `Requires at least`, stale `Tested up to`, no `Requires PHP`. | — | Low |
| 10 | `lib/style-handler/includes/class-parse-css.php:33`, `style-handler.php:173,204` (shared submodule) | `array_key_exists()` on the `eb_settings` option, `in_array()` on `active_plugins`, and `array_merge()` on `_eb_reusable_block_ids` meta: all TypeError on PHP 8 if the stored value isn't an array. `{$wpdb->prefix}posts` at `:425` should be `$wpdb->posts`. | PHP 8.0+ (corrupt data only) | Low |

Also checked and clean: no removed PHP functions, no dynamic properties, no implicit-nullable params, no `${}` interpolation, no `ArrayAccess`/`Iterator` implementations. No REST routes. No early text-domain loading. `$wpdb` usage is prepared. No jQuery in the enqueued JS (`lib/js/eb-animation-load.js`, `dist/frontend/index.js`). `dist/*.asset.php` files are valid.

## 5. Dead version-check branches (floor raise)

| File | Line | Condition | What the branch does | Single remaining path if removed |
|---|---|---|---|---|
| `includes/helpers.php` | 85–89 | `(float) get_bloginfo('version') <= 5.6` | On WP ≤ 5.6, returns the block *name* so `register_block_type()` registers by name | `get_block_register_path()` always returns `$blockPath`, so `register_block_type( PARALLAX_SLIDER_BLOCK_ADMIN_PATH, [...] )` |

Decision: **awaiting decision** (remove / keep / keep-with-comment). The branch is untouched.

Also noted, outside the PHP scope: `dist/modules.js` (bundled from the `controls` submodule) has `eb_wp_version >= 5.8 ? registerBlockType(metadata) : registerBlockType(name)`, and the else-branch is dead at a 6.0 floor. It's generated code from another repo, so there's nothing to change here.

## 6. Fixes applied

| Issue | Fix |
|---|---|
| #1 | `require_once` wrapped in `file_exists()`. When the submodule is present, behavior is identical. When it's missing, the plugin loads without generated block CSS instead of fataling. |
| #3 | `include_once` → `require` (the file ships in `dist/`), so the asset array is always returned. |
| #4 | `get_fonts_family()` skips non-string attribute values (`continue`). Valid string fonts produce exactly the same Google Fonts URL (verified before/after). |
| #6 | Added `if ( ! defined( 'ABSPATH' ) ) { exit; }` to the main file. |
| #9 | See §9. Version bumped to 1.2.8 in the header, `PARALLAX_SLIDER_BLOCK_VERSION`, readme `Stable tag`, and `package.json`. Changelog entry added. |

Tiny output note on #4: a `null` font attribute used to add an empty family (`:100,100italic…|`) to the Google Fonts URL. Now it's skipped. An array value used to fatal.

## 7. Flagged, not auto-fixed (behavior-visible)

1. **#2 apiVersion.** Recommend adding `"apiVersion": 3` to `block.json` and rebuilding (`npm run build`, since `block.json` is bundled into `dist/index.js`). This removes the extra v1 editor wrapper around `useBlockProps`, so editor DOM/CSS may shift. Test the editor and saved-post validation (`deprecated.js`) before shipping.
2. **#5 modules.css in the iframe.** Recommend checking the editor canvas on WP 7.1. If block styling is missing, enqueue canvas-targeted CSS via `enqueue_block_assets` (guarded by `is_admin()`) or ship it as the block's `editorStyle`.
3. **#7 eb_wp_version float.** Harmless today. Changing it to a string alters JS-visible data. Leave it until the `controls` package changes its comparison.
4. **#10 style-handler.** Shared across EB plugins, so fix it upstream in `EssentialBlocks/style-handler`, not here.

## 8. Old-vs-new conflicts

None. Every fix uses constructs valid across PHP 7.4–8.5 and WP 6.0–7.1.

## 9. Declared range now

- Plugin header: `Requires at least: 6.0`, `Tested up to: 7.1`, `Requires PHP: 7.4`, `Version: 1.2.8`
- `readme.txt`: `Requires at least: 6.0`, `Tested up to: 7.1`, `Requires PHP: 7.4`, `Stable tag: 1.2.8`

## 10. Verification

- `php -l` (PHP 8.5.8) on every plugin PHP file, including `lib/style-handler`: no syntax errors.
- Stubbed PHP 8.5 smoke test of the font loader (`error_reporting=-1`). Before the fix: the null-offset deprecation, then `TypeError: Cannot access offset of type array on array`. After the fix: clean, with an identical URL for valid fonts.
- phpcs: not installed, skipped.
- Live WP run: not done. WP-CLI against the local site returned "Error establishing a database connection" (the Local site wasn't running).
- `lib/style-handler` submodule initialized at its pinned commit `34fb2c6` to audit it; the pin is unchanged. The `controls` submodule is still uninitialized (build-time only and excluded from the dist zip).
- `package-lock.json` still says `1.2.4` (already out of sync before this pass), so it was left alone.
- This report isn't in `.distignore`. Add it there or delete it before building a release zip.
