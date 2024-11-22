<?php

namespace Piairre\Skuse\Extractor;

use Symfony\Component\Routing\RouterInterface;
use Piairre\Skuse\Model\Endpoint;

class RouteExtractor implements ExtractorInterface
{
    private RouterInterface $router;

    public function __construct(
        RouterInterface $router
    ) {
        $this->router = $router;
    }

    public function extract(): array
    {
        $endpoints = [];
        foreach ($this->router->getRouteCollection()->all() as $name => $route) {
            $path = $route->getPath();
            $methods = $route->getMethods() ?: ['GET'];

            $endpoints[] = new Endpoint($name, $path, $methods);
        }
        return $endpoints;
    }
}