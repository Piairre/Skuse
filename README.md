# Skuse

> Pronounced "skews" `/skjuːz/`

A modern OpenAPI documentation viewer for Symfony, powered by [skuse-ui](https://github.com/Piairre/skuse-ui).

## Installation

```bash
composer require piairre/skuse
```

**1. Register the bundle** in `config/bundles.php`:

```php
return [
    // ...
    Piairre\Skuse\PiairreSkuseBundle::class => ['all' => true],
];
```

**2. Configure the bundle** — create `config/packages/piairre_skuse.yaml`:

```yaml
piairre_skuse:
    open_api_url: '/docs.json'    # path or full URL to your OpenAPI spec
    theme: system                 # light | dark | system (default: system)
```

**3. Register the routes** — create `config/routes/piairre_skuse.yaml`:

```yaml
piairre_skuse:
    resource: '@PiairreSkuseBundle/config/routes.yaml'
    prefix: /skuse  # change this to serve the docs at a different path
```

## Configuration

| Option | Required | Default | Description |
|--------|----------|---------|-------------|
| `open_api_url` | yes | — | Path or URL to your OpenAPI JSON/YAML spec |
| `theme` | no | `system` | Color theme: `light`, `dark`, or `system` |

## Requirements

- PHP >= 8.1
- Symfony >= 6.4

## License

[MIT](LICENSE)
