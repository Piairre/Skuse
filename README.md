# Skuse

> Pronounced "skews" `/skjuːz/`

A modern OpenAPI documentation viewer for Symfony, powered by [skuse-ui](https://github.com/Piairre/skuse-ui).

## Installation

```bash
composer require piairre/skuse
```

Register the bundle in `config/bundles.php`:

```php
return [
    // ...
    Piairre\Skuse\PiairreSkuseBundle::class => ['all' => true],
];
```

Create `config/packages/piairre_skuse.yaml`:

```yaml
piairre_skuse:
    open_api_url: '/docs.json'   # path or full URL to your OpenAPI spec
    theme: system                 # light | dark | system (default: system)
```

Create `config/routes/piairre_skuse.yaml`:

```yaml
piairre_skuse:
    resource: '@PiairreSkuseBundle/config/routes.yaml'
```

Your documentation is now available at `/api-docs`.

## Configuration

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `open_api_url` | yes | — | Path or URL to your OpenAPI JSON/YAML spec |
| `theme` | no | `system` | Color theme: `light`, `dark`, or `system` |

### Custom route prefix

To serve the docs at a different path, override the prefix in your routes config:

```yaml
piairre_skuse:
    resource: '@PiairreSkuseBundle/config/routes.yaml'
    prefix: /docs
```

### API Platform

API Platform exposes its OpenAPI spec at `/api/docs.json` by default:

```yaml
piairre_skuse:
    open_api_url: '/api/docs.json'
```

## Requirements

- PHP >= 8.1
- Symfony >= 6.4

## License

[MIT](LICENSE)
