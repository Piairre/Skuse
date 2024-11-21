<?php

namespace Piairre\Skuse\Generator;

use Piairre\Skuse\Extractor\ExtractorInterface;
class OpenApiGenerator
{
    private ExtractorInterface $extractor;

    public function __construct(ExtractorInterface $extractor) {
        $this->extractor = $extractor;
    }

    public function generate(): array
    {
        $endpoints = $this->extractor->extract();

        // Conversion des endpoints en spécification OpenAPI
        $spec = [
            'openapi' => '3.0.0',
            'paths' => []
        ];

        foreach ($endpoints as $endpoint) {
            $spec['paths'][$endpoint->path] = array_reduce(
                $endpoint->methods,
                fn($carry, $method) => [
                    ...($carry ?? []),
                    strtolower($method) => [
                        'summary' => $endpoint->name,
                        'description' => $endpoint->description
                    ]
                ],
                []
            );
        }

        return $spec;
    }
}