<?php

namespace Piairre\Skuse\Generator;

use Exception;
use Symfony\Component\HttpFoundation\RequestStack;

class OpenApiGenerator
{
    private RequestStack $requestStack;
    private string $docsJsonPath;

    public function __construct(RequestStack $requestStack, string $docsJsonPath = 'docs.jsonopenapi')
    {
        $this->requestStack = $requestStack;
        $this->docsJsonPath = $docsJsonPath;
    }

    public function generate(): array
    {
        $basePath = $this->requestStack->getCurrentRequest()->getSchemeAndHttpHost();
        $jsonOpenApiPath = $basePath . '/' . $this->docsJsonPath;

        try {
            $jsonOpenApi = file_get_contents($jsonOpenApiPath);
        } catch (Exception) {
            throw new Exception('Invalid path. URL : ' . $jsonOpenApiPath);
        }

        $spec = json_decode($jsonOpenApi, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Error while reading documentation : ' . json_last_error_msg());
        }

        return $spec;
    }
}